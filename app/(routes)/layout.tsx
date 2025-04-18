import "#/globals.css";

import { Metadata } from "next";
import type { Viewport } from "next";

import Container from "#/components/container";
import Menu from "#/components/navbar";

export const metadata: Metadata = {
  title: "RSC Demos",
  description:
    "A collection of React Server Component demonstrations showcasing the power and capabilities of Next.js RSC architecture.",
  alternates: {
    canonical: "https://rsc.xn--pckua0m.xn--tckwe",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Menu />
        <main className="flex flex-grow py-8">
          <Container className="flex flex-grow">{children}</Container>
        </main>
      </body>
    </html>
  );
}
