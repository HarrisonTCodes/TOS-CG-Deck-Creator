import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOS Card Game Deck Creator",
  description: "Tool to create decks for Town of Salem Card Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
