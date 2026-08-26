import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rubik Sota — Portfolio Museum",
  description: "A cinematic editorial foyer leading into an interactive portfolio museum.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">{children}</body>
    </html>
  );
}
