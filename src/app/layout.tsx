import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "East Africa Bridge Group Limited",
  description: "Procurement, Sourcing & Market Access Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between mx-auto px-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Image src="/LOGO.svg" alt="East Africa Bridge Logo" width={40} height={40} className="dark:invert" />
                  <span className="hidden font-bold sm:inline-block text-primary">
                    East Africa Bridge
                  </span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <Link href="/about">About</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/commodities">Commodities</Link>
                  <Link href="/markets">Markets</Link>
                  <Link href="/contact">Contact</Link>
                  <ThemeToggle />
                </nav>
              </div>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2024 East Africa Bridge Group Limited. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                  <Link href="/contact" className="text-sm font-medium underline underline-offset-4">
                    Contact Us
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
