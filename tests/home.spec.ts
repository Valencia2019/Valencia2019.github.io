import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect the home page to have a title.
  await expect(page).toHaveTitle(/My Portfolio Home | Valencia McMurray/);
});

test('has text on home page', async ({ page }) => {
  await page.goto('/');

  // Expects page to have a heading
  await expect(page.getByRole('heading', { name: 'Welcome to my Portfolio' })).toBeVisible();

  // Check for the portfolio paragraph
  await expect(page.getByText('Hi, I’m Valencia (V/Wolf) – a Principal QA Engineer & Test Automation Leader with 10+ years in tech. I specialize in architecting scalable test frameworks, driving CI/CD integration, and leading teams to deliver high-quality software. My expertise spans JavaScript, Cypress, and Playwright for automation, along with hands-on development of custom testing tools. Passionate about shift-left testing and mentoring engineers, I bridge quality and engineering through risk-driven strategies and process innovation.')).toBeVisible();
});

test('has profile image in a half oval', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('half-oval-image')).toBeVisible();
});