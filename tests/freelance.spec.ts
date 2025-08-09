import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/freelance');
});

test('has heading on freelance page', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Booking My Freelance Services' })).toBeVisible();
});

test('Send Inquiry link is visible and clickable', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Send Inquiry' })).toBeVisible();
});

test('Schedule a Call button is visible and clickable', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Schedule a Call' })).toBeVisible();
});

test('View My QA & Web Development Services  link is visible and clickable', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'View My QA & Web Development Services' })).toBeVisible();
});