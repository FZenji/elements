import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elements — Interactive Periodic Table",
  description: "Explore the periodic table of elements with interactive 3D atom visualizations, detailed information, and beautiful animations. Built by Henry Tolenaar.",
  keywords: ["periodic table", "elements", "chemistry", "atoms", "3D visualization", "interactive"],
  authors: [{ name: "Henry Tolenaar" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Elements — Interactive Periodic Table",
    description: "Explore all 118 elements with interactive 3D atom visualizations and detailed information.",
    type: "website",
    siteName: "Elements",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elements — Interactive Periodic Table",
    description: "Explore all 118 elements with interactive 3D atom visualizations.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Elements — Interactive Periodic Table",
              description: "Interactive periodic table with 3D atom visualizations",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              author: {
                "@type": "Person",
                name: "Henry Tolenaar",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <footer className="site-footer">
          <p>Developed by Henry Tolenaar</p>
          <a
            href="https://ko-fi.com/henrytolenaar"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-link"
          >
            ☕ Support this project
          </a>
        </footer>
      </body>
    </html>
  );
}
