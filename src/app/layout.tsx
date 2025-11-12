import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam Freedom Stack",
  description: "Life's about following passions and building true financial freedom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

