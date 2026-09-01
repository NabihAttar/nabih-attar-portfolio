import { Geist } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nabih-al-attar-portfolio.vercel.app"),
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.intro,
  applicationName: `${personalInfo.name} Portfolio`,
  keywords: [
    "Nabih Al Attar",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Software Developer",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.intro,
    url: "https://nabih-al-attar-portfolio.vercel.app",
    siteName: `${personalInfo.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.intro,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400&display=swap"
        />
      </head>
      <body
        className="min-h-full bg-slate-950 font-sans text-slate-100 selection:bg-cyan-300/30 selection:text-white"
        style={{
          "--font-cursor-trail-sans": "'Satoshi', ui-sans-serif, system-ui, sans-serif",
          "--font-cursor-trail-mono": "'Geist Mono', ui-monospace, monospace",
        }}
      >
        {children}
      </body>
    </html>
  );
}
