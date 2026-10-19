import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://docs.oracle.com/en/java/javase/27/docs/api/deprecated-list.html#for-removal');
  await page.getByRole('link', { name: 'Terminally Deprecated' }).click();
  await page.locator('div').filter({ hasText: 'com.sun.source.util.' }).nth(4).click();
});