import { test, expect } from "@playwright/test";

test("home page renders heading and description", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("heading")).toHaveText("Platform Starter Kit");
  await expect(page.getByTestId("description")).toBeVisible();
});

test("home page shows feature list with 4 items", async ({ page }) => {
  await page.goto("/");
  const features = page.getByTestId("feature-list").locator("li");
  await expect(features).toHaveCount(4);
  await expect(features.first()).toContainText("CI/CD");
});
