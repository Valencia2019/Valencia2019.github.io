import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('freelance-button').click();
    await expect(page.getByTestId('freelance-menu')).toBeVisible();
    await expect(page.getByTestId('freelance-link')).toBeVisible();
    await page.getByTestId('freelance-link').click();
});

test('has heading on freelance page', {
  tag: '@smoke',
}, async ({ page }) => {
    await expect(page).toHaveURL(/\/freelance/);
    await expect(page.getByRole('heading', { name: 'Booking My Freelance Services' })).toBeVisible();
});

test('Send Inquiry link is visible and clickable', {
  tag: '@regression',
}, async ({ page }) => {
    const sendInquiryLink = page.getByTestId('send-inquiry-link');
    await sendInquiryLink.scrollIntoViewIfNeeded(); //seems redundant, however noticed some flaky behavior across different browsers
    await expect(sendInquiryLink).toBeVisible();
    await expect(sendInquiryLink).toHaveText('Send Inquiry');
    await expect(sendInquiryLink).toHaveAttribute('href', expect.stringContaining('contact'));
    await sendInquiryLink.click({force: true});
    await expect(page).toHaveURL(/\/contact/);
});

test('Schedule via Calendly link is visible and clickable', {
  tag: '@regression',
}, async ({ page }) => {
    const calendlyLink = page.getByTestId('schedule-link');
    await calendlyLink.scrollIntoViewIfNeeded();
    await expect(calendlyLink).toBeVisible();
    await expect(calendlyLink).toHaveText('Schedule via Calendly');
    await expect(calendlyLink).toHaveAttribute('href', expect.stringContaining('contact/#schedule'));
    await calendlyLink.click({force: true});
    await expect(page).toHaveURL(/contact\/#schedule\/?$/);
    await expect(page.getByTestId('calendly-iframe')).toBeVisible();
});

test('View My QA & Web Development Services link is visible and clickable', {
  tag: '@regression',
}, async ({ page }) => {
    const viewServicesLink = page.getByTestId('view-services-link');
    await viewServicesLink.scrollIntoViewIfNeeded();
    await expect(viewServicesLink).toBeVisible();
    await expect(viewServicesLink).toContainText('View My QA & Web Development Services');
    await expect(viewServicesLink).toHaveAttribute('href', expect.stringContaining('services'));
    await viewServicesLink.click();
    //wait for navigation to complete
    await page.waitForURL(/\/freelance\/services/);
    await expect(page.getByRole('heading', { name: 'My Freelance Services' })).toBeVisible();
});