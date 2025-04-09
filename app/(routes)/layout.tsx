import "#/globals.css";

import Container from "#/components/container";
import Menu from "#/components/navbar";

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
