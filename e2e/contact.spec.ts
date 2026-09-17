import { test, expect } from "@playwright/test";

test("contact form submits and shows success message", async ({ page }) => {
  await page.goto("/contact");

  await page.getByTestId("name-input").fill("Test User");
  await page.getByTestId("message-input").fill("Hello from Playwright!");
  await page.getByTestId("submit-button").click();

  await expect(page.getByTestId("success-heading")).toHaveText("Message Sent!");
  await expect(page.getByTestId("success-message")).toContainText("Test User");
});

test("contact form reset returns to form", async ({ page }) => {
  await page.goto("/contact");

  await page.getByTestId("name-input").fill("Reset User");
  await page.getByTestId("message-input").fill("Testing reset");
  await page.getByTestId("submit-button").click();

  await expect(page.getByTestId("success-heading")).toBeVisible();
  await page.getByTestId("reset-button").click();

  await expect(page.getByTestId("contact-form")).toBeVisible();
  await expect(page.getByTestId("name-input")).toHaveValue("");
});
