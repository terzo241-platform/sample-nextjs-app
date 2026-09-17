import { test, expect } from "@playwright/test";

test("health API returns 200 with status healthy", async ({ request }) => {
  const response = await request.get("/api/health");
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.status).toBe("healthy");
  expect(body.version).toBe("1.0.0");
});
