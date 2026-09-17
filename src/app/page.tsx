export default function Home() {
  return (
    <div>
      <h1 data-testid="heading">Platform Starter Kit</h1>
      <p data-testid="description">
        A sample Next.js app demonstrating the CI/CD platform with reusable
        workflows, security scanning, and Playwright E2E testing.
      </p>
      <section style={{ marginTop: "2rem" }}>
        <h2>Features</h2>
        <ul data-testid="feature-list">
          <li>Centralized CI/CD via reusable workflows</li>
          <li>Security scanning (CodeQL + Trivy + gitleaks)</li>
          <li>Playwright E2E tests with 3-shard parallelism</li>
          <li>Container build + OIDC deploy</li>
        </ul>
      </section>
    </div>
  );
}
