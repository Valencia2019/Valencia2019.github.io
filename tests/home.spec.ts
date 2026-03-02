import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', {
  tag: '@smoke',
}, async ({ page }) => {
  await expect(page).toHaveTitle(/My Portfolio Home | Valencia McMurray/);
});

test('has updated summary text on home page', {
  tag: '@smoke',
}, async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Welcome to my Portfolio' })).toBeVisible();
  await expect(page.getByText(/Principal QA Engineer with 10\+ years of experience architecting automation frameworks/i)).toBeVisible();
});

test('has profile image in a half oval', {
  tag: '@regression',
}, async ({ page }) => {
  await expect(page.getByTestId('half-oval-image')).toBeVisible();
});

test('View Personal Projects link is visible and clickable', {
  tag: '@regression',
}, async ({ page }) => {
  const viewWorkLink = page.getByTestId('view-work-link');
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight / 2);
  });
  await expect(viewWorkLink).toBeVisible();
  await expect(viewWorkLink).toHaveAttribute('href', expect.stringContaining('projects'));
  await viewWorkLink.click();
  await expect(page).toHaveURL(/\/projects/);
});

test('View Resume link is visible and navigates to resume page', {
  tag: '@regression',
}, async ({ page }) => {
  const viewResumeLink = page.getByTestId('view-resume-link');

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight / 2);
  });
  await expect(viewResumeLink).toBeVisible();
  await expect(viewResumeLink).toHaveAttribute('href', '/resume');

  await viewResumeLink.click();
  await expect(page).toHaveURL(/\/resume/);
  await expect(page.getByRole('heading', { name: 'Valencia McMurray' })).toBeVisible();
});

test('Hire Me link is visible and clickable', {
  tag: '@regression',
}, async ({ page }) => {
  const hireMeLink = page.getByTestId('hire-me-link');
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight / 2);
  });
  await expect(hireMeLink).toBeVisible();
  await expect(hireMeLink).toHaveAttribute('href', expect.stringContaining('contact'));
  await hireMeLink.click();
  await expect(page).toHaveURL(/\/contact/);
});
