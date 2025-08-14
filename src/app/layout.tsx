import type { Metadata } from "next";
import "./globals.css";
import ClientBodyClass from "@/components/ClientBodyClass";

export const metadata: Metadata = {
  title: "Shailesh Singh - Software Developer & AI Enthusiast",
  description:
    "Portfolio of Shailesh Singh - Software Developer specializing in Generative AI, Full-Stack Development, and Competitive Programming.",
  keywords: [
    "Shailesh Singh",
    "Software Developer",
    "Generative AI",
    "Full Stack",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Shailesh Singh" }],
  creator: "Shailesh Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shaileshsingh.tech/",
    title: "Shailesh Singh - Software Developer & AI Enthusiast",
    description:
      "Portfolio of Shailesh Singh - Software Developer specializing in Generative AI, Full-Stack Development, and Competitive Programming.",
    siteName: "Shailesh Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shailesh Singh - Software Developer & AI Enthusiast",
    description:
      "Portfolio of Shailesh Singh - Software Developer specializing in Generative AI, Full-Stack Development, and Competitive Programming.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        <ClientBodyClass />
        {children}
      </body>
    </html>
  );
}
