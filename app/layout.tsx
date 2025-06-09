import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noah Atkins",
  description: "Technical problem solver with a passion for coding, sports, and exploring new places. Specializing in web development and enterprise solutions.",
  keywords: ["Software Engineer", "Web Developer", "React", "Next.js", "TypeScript"],
  authors: [{name: "Noah Atkins"}],
  creator: "Noah Atkins",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noahatkins.com",
    title: "Noah Atkins",
    description: "Technical problem solver with a passion for coding, sports, and exploring new places.",
    siteName: "Noah Atkins Portfolio",
    images: [
      {
        url: "https://noahatkins.com/api/og",
        width: 1200,
        height: 630,
        alt: "Noah Atkins Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Atkins",
    description: "Technical problem solver with a passion for coding, sports, and exploring new places.",
    images: ["https://noahatkins.com/api/og"],
  },
  icons: {
    icon: [{url: "/favicon.ico"}, {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"}, {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"}],
    shortcut: ["/favicon.ico"],
    apple: [{url: "/apple-touch-icon.png"}],
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
