import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('freelance-button').click();
    await expect(page.getByTestId('freelance-menu')).toBeVisible();
    await expect(page.getByTestId('services-link')).toBeVisible();
    
    await Promise.all([
    page.waitForURL(/\/freelance\/services/),
    page.getByTestId('services-link').click()
  ]);
});

test('has heading on freelance services page', {
  tag: '@smoke',
}, async ({ page }) => {
    await expect(page).toHaveURL(/freelance\/services/);
    await expect(page.getByRole('heading', { name: 'My Freelance Services' })).toBeVisible();
});

test('verify services page has expected content', { 
  tag: '@regression',
}, async ({ page }) => {
    await expect(page.getByText('Here\'s a list of the freelance services I offer and starting prices.')).toBeVisible();
    await expect(page.getByTestId('services-menu')).toBeVisible();
    await expect(page.getByTestId('service-cards')).toBeVisible();

    const serviceCards = page.locator('article');
    await expect(serviceCards.nth(0)).toBeVisible();
    await expect(serviceCards.nth(1)).toBeVisible();
});

test('shows more services when Show More is clicked',
{ tag: '@regression' }, async ({ page }) => {
  // Switch to Development → Web Development
  await page.getByRole('button', { name: 'Web Development' }).click();

  // Click Show More
  await page.getByRole('button', { name: /show more/i }).click();

  // Verify at least 6 services visible
  const serviceCards = page.locator('article');
  await expect(serviceCards.nth(5)).toBeVisible();
});

test('changes category and subcategory correctly',
{ tag: '@regression' }, async ({ page }) => {
  // Switch to Development → Web Development
  await page.getByRole('button', { name: 'Web Development' }).click();

  // Verify first 3 services for that category are visible
  const serviceCards = page.locator('article');
  await expect(serviceCards.nth(0)).toBeVisible();
  await expect(serviceCards.nth(1)).toBeVisible();
  await expect(serviceCards.nth(2)).toBeVisible();
});