import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('contact-link').click();
});

test('Contact page has expected content', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /Contact Me/i })).toBeVisible();
  await expect(page.getByText(/I'm currently available for freelance QA consulting or dev work/i)).toBeVisible();
  await expect(page.getByRole('heading', { name: /Before You Reach Out/i })).toBeVisible();
  await expect(page.getByText(/To help us make the most of our time, please include the following in your message or be ready to discuss them during our call:/i)).toBeVisible();
  await expect(page.getByTestId('before-you-reach-out-list')).toBeVisible();
});

test('Email link is not visible', async ({ page }) => {
  const emailLink = page.getByTestId('email-link');
  await expect(emailLink).not.toBeVisible();
});

test('LinkedIn link is not visible', async ({ page }) => {
  const linkedinLink = page.getByTestId('linkedin-link');
  await expect(linkedinLink).not.toBeVisible();
});

test('Schedule link is not visible', async ({ page }) => {
  const scheduleLink = page.getByRole('link', { name: /schedule a call/i });
  await expect(scheduleLink).not.toBeVisible();
});

test('Don\'t show this again checkbox is visible and unchecked', async ({ page }) => {
  const checkbox = page.getByTestId('checkbox');
  await expect(checkbox).toBeVisible();
  await expect(checkbox).not.toBeChecked();
});

test('Check the "Don\'t show this again" checkbox and verify contact info is visible', async ({ page }) => {
  const checkbox = page.getByTestId('checkbox');
  await checkbox.click();
  await expect(checkbox).toBeChecked();

  const emailLink = page.getByTestId('email-link');
  await expect(emailLink).toBeVisible();
  await expect(emailLink).toHaveAttribute('href', /mailto:/);
  const linkedinLink = page.getByTestId('linkedin-link');
  await expect(linkedinLink).toBeVisible();
  await expect(linkedinLink).toHaveAttribute('href', /linkedin.com/);
  const calendlyModal = page.getByTestId('calendly-modal-oval');
  await expect(calendlyModal).toBeVisible();
});