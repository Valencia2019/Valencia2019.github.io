import { test, expect, Page, Download } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})
test('has title', {
  tag: '@smoke',
}, async ({ page }) => {
  // Expect the home page to have a title.
  await expect(page).toHaveTitle(/My Portfolio Home | Valencia McMurray/);
});

test('has text on home page', {
  tag: '@smoke',
}, async ({ page }) => {
  // Expects page to have a heading
  await expect(page.getByRole('heading', { name: 'Welcome to my Portfolio' })).toBeVisible();

  // Check for the portfolio paragraph
  await expect(page.getByText('Hi, I’m Valencia (V/Wolf) – a Principal QA Engineer & Test Automation Leader with 10+ years in tech. I specialize in architecting scalable test frameworks, driving CI/CD integration, and leading teams to deliver high-quality software. My expertise spans JavaScript, Cypress, and Playwright for automation, along with hands-on development of custom testing tools. Passionate about shift-left testing and mentoring engineers, I bridge quality and engineering through risk-driven strategies and process innovation.')).toBeVisible();
});

test('has profile image in a half oval', {
  tag: '@regression',
}, async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('half-oval-image')).toBeVisible();
});

test('View Work link is visible and clickable', {
  tag: '@regression',
}, async ({ page }) => {
  const viewWorkLink = page.getByTestId('view-work-link');
  // Scroll down the page to make sure the link is visible
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight / 2);
  });
  await expect(viewWorkLink).toBeVisible();
  await expect(viewWorkLink).toHaveAttribute('href', expect.stringContaining('projects'));
  await viewWorkLink.click();
  await expect(page).toHaveURL(/\/projects/);
});

test('View Resume link is visible and clickable', { tag: '@regression' }, async ({ page }) => {
  const viewResumeLink = page.getByTestId('view-resume-link');
  const browserName = page.context().browser()?.browserType().name();

  // Ensure visible
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight / 2);
  });
  await expect(viewResumeLink).toBeVisible();

  // Check href before clicking
  const href = await viewResumeLink.getAttribute('href');
  expect(href).toMatch(/resume\.pdf$/);

  if (browserName === 'chromium') {
    // --- Chrome-specific code ---
    const [popupOrDownload] = await Promise.all([
    Promise.race([
      page.waitForEvent('popup').catch(() => null),
      page.waitForEvent('download').catch(() => null),
    ]),
    viewResumeLink.click(),
  ]);

  if (!popupOrDownload) {
    throw new Error('No popup or download occurred when clicking resume link.');
  }

  if ('url' in popupOrDownload) {
    // It's a Page (popup)
    const popup = popupOrDownload as Page;

    try {
      await popup.waitForLoadState('domcontentloaded', { timeout: 5000 });
    } catch {
      console.warn('Popup did not fully load before timeout — continuing...');
    }

    const actualUrl = popup.url();
    console.log('Popup URL:', actualUrl);

    // Allow known browser-specific behaviors
    const isPdfUrl =
      /resume\.pdf$/i.test(actualUrl) ||
      actualUrl.startsWith('chrome-extension://') || // Chrome PDF viewer
      actualUrl === 'about:blank'; // Safari/Firefox quirk

    if (!isPdfUrl) {
      throw new Error(`Unexpected popup URL: ${actualUrl}`);
    }
  } else {
    // It's a file Download
    const download = popupOrDownload as Download;
    const path = await download.path();
    console.log('Downloaded to:', path);
    expect(path).toBeTruthy();
  }
  } else {
    // --- Firefox / WebKit (Safari) logic ---
    // Open the popup
  const popupPromise = page.waitForEvent('popup');
  await viewResumeLink.click();
  const resumePdfPage = await popupPromise;

  // Just verify popup opened (don't depend on final URL)
  await resumePdfPage.waitForLoadState();
  expect(resumePdfPage).toBeTruthy();
  }
});


test('Hire Me link is visible and clickable', {
  tag: '@regression',
}, async ({ page }) => {
  const hireMeLink = page.getByTestId('hire-me-link');
    // Scroll down the page to make sure the link is visible
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight / 2);
  });
  await expect(hireMeLink).toBeVisible();
  await expect(hireMeLink).toHaveAttribute('href', expect.stringContaining('contact'));
  await hireMeLink.click();
  await expect(page).toHaveURL(/\/contact/);
});