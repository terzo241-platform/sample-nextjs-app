export default function About() {
  return (
    <div>
      <h1 data-testid="about-heading">About the Platform</h1>
      <p data-testid="about-description">
        This platform provides standardized CI/CD, infrastructure provisioning,
        and AI-powered developer tools for all teams across the organization.
      </p>
      <section style={{ marginTop: "2rem" }}>
        <h2>Architecture</h2>
        <dl data-testid="architecture-list">
          <dt><strong>Pillar 1: CI/CD</strong></dt>
          <dd>Reusable GitHub Actions workflows for Python, Node.js, and Java</dd>
          <dt><strong>Pillar 2: Infrastructure</strong></dt>
          <dd>Shared Terraform modules with GitOps-driven provisioning</dd>
          <dt><strong>Pillar 3: AI Interface</strong></dt>
          <dd>Natural language agent for deployment and infrastructure tasks</dd>
        </dl>
      </section>
    </div>
  );
}
