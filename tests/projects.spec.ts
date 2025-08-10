import {expect, test} from '@playwright/test';
import { projects } from '@/data/projects';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('projects-link').click();
});

test('verify projects page has expected content', {
    tag: '@smoke',
}, async ({ page }) => {
    await expect(page).toHaveURL(/\/projects/);
    await expect(page.getByRole('heading', { name: 'My Projects' })).toBeVisible();
    await expect(page.getByText('Here are some of the sample projects I\'ve worked on. The demo links for the test projects lead to report pages.')).toBeVisible();
});

test('verify project cards are present', {
    tag: '@smoke',
}, async ({ page }) => {
    //check that project cards are present and visible
    const projectCards = page.locator('article');
    const count = await projectCards.count();
    for(let i = 0; i < count; i++) {
        await expect(projectCards.nth(i)).toBeVisible();
    }
    await expect(projectCards).toHaveCount(projects.length);
});

test('verify project cards content', {
    tag: '@regression',
}, async ({ page }) => {
    for (const project of projects) {
        //turn project title into dyanmic test id part
        const testId = project.title.toLowerCase().replace(/\s+/g, '-');
        const projectCard = page.getByTestId(`project-card-${testId}`);
        await expect(projectCard).toBeVisible();
        await expect(projectCard.getByTestId(`project-card-image-${testId}`)).toBeVisible();
        await expect(projectCard.getByRole('heading', { name: project.title })).toBeVisible();
        await expect(projectCard.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', project.github);
        await expect(projectCard.getByRole('paragraph')).toHaveText(project.description);
    }
});
