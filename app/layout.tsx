import "./globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Noah Atkins",
  description: "A small showcase of projects I've worked on.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-slate-900">
      <head>
        <link rel="icon" href="./personal_blue.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A small showcase of projects I've worked on." />
        <meta name="keywords" content="Noah Atkins, projects, portfolio" />
        <meta name="author" content="Noah C. Atkins" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Noah Atkins" />
        <meta property="og:description" content="A small showcase of projects I've worked on." />
        <meta property="og:url" content="https://www.noahatkins.com" />
        <meta property="og:image" content="https://www.noahatkins.com/personal_blue.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Noah Atkins" />
        <meta property="twitter:description" content="A small showcase of projects I've worked on." />
        <meta property="twitter:image" content="https://www.noahatkins.com/personal_blue.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
