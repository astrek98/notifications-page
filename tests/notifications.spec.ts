/* eslint-disable @typescript-eslint/space-before-function-paren */
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // await page.goto('http://127.0.0.1:5173/notifications-page/');
  await page.goto('https://astrek98.github.io/notifications-page/');
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/notifications/i);
});

test('Notifications heading visible', async ({ page }) => {
  // Expects page to have a heading with the name of Notifications.
  await expect(
    page.getByRole('heading', { name: 'Notifications' })
  ).toBeVisible();
});

test('Mark all as read', async ({ page }) => {
  const markAllAsReadBtn = page.getByRole('button', {
    name: 'Mark all as read',
  });
  const notificationsCount = page.getByRole('status');

  // Expects to be visible
  await expect(markAllAsReadBtn).toBeVisible();

  // Click mark all as read button.
  await markAllAsReadBtn.click();

  // Expect notifications count to be 0
  await expect(notificationsCount).toContainText('0');

  // Expects action button to be invisible
  await expect(markAllAsReadBtn).not.toBeVisible();
});

test('Mark as read', async ({ page }) => {
  const notificationsCount = page.getByRole('status');
  const notificationsCountBefore = Number(await notificationsCount.innerText());

  const unreadNotifications = page.getByRole('article');
  await unreadNotifications.first().click();

  // Get notifications count after mark as read
  const notificationsCountAfter = Number(await notificationsCount.innerText());

  // Expect notifications count to be 1 less than before
  expect(notificationsCountAfter).toBe(notificationsCountBefore - 1);

  await unreadNotifications.first().click();

  // Expect notifications count to be same as before
  const notificationsCountAfterSecondClick = Number(
    await notificationsCount.innerText()
  );
  expect(notificationsCountAfter).toBe(notificationsCountAfterSecondClick);
});
