import { test, expect } from "@playwright/test";

test("navigation links work correctly", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("nav-about").click();
  await expect(page.getByTestId("about-heading")).toHaveText(
    "About the Platform"
  );

  await page.getByTestId("nav-contact").click();
  await expect(page.getByTestId("contact-heading")).toHaveText("Contact Us");

  await page.getByTestId("nav-home").click();
  await expect(page.getByTestId("heading")).toHaveText("Platform Starter Kit");
});

test("about page shows architecture pillars", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByTestId("about-description")).toBeVisible();
  await expect(page.getByTestId("architecture-list")).toBeVisible();
  await expect(page.getByText("Pillar 1: CI/CD")).toBeVisible();
  await expect(page.getByText("Pillar 2: Infrastructure")).toBeVisible();
  await expect(page.getByText("Pillar 3: AI Interface")).toBeVisible();
});
