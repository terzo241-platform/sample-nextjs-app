import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Starter Kit",
  description: "Sample Next.js app consuming the platform CI/CD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem 2rem",
            borderBottom: "1px solid #eee",
            background: "#f9f9f9",
          }}
        >
          <a href="/" data-testid="nav-home">Home</a>
          <a href="/about" data-testid="nav-about">About</a>
          <a href="/contact" data-testid="nav-contact">Contact</a>
        </nav>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
