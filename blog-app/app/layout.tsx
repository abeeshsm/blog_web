import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderConditional from "./components/HeaderConditional";
import FooterConditional from "./components/FooterConditional";
import Providers from "./components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sm Blog",
  description: "lets connects ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Providers>
          <HeaderConditional />

          <main className="flex-1">
            {children}
          </main>

          <FooterConditional />
        </Providers>
      </body>
    </html>
  );
}
