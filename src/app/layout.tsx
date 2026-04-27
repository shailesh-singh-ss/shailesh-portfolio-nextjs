import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import ClientBodyClass from "@/components/ClientBodyClass";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shailesh Singh — AI Engineer · Real-time AI Systems",
  description:
    "AI Engineer at Zykrr building real-time CX pipelines (Kafka · ClickHouse · Kubernetes), LLM-driven analytics, and low-latency voice agents. 34.56M+ events/day in production.",
  keywords: [
    "Shailesh Singh",
    "AI Engineer",
    "Zykrr",
    "Real-time AI",
    "Apache Kafka",
    "ClickHouse",
    "Kubernetes",
    "LiveKit",
    "RAG",
    "LangChain",
    "Distributed Systems",
    "LLM Pipelines",
    "Generative AI",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: "Shailesh Singh" }],
  creator: "Shailesh Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shaileshsingh.tech/",
    title: "Shailesh Singh — AI Engineer · Real-time AI Systems",
    description:
      "Real-time CX pipelines, LLM analytics, and low-latency voice agents at Zykrr. 34.56M+ events/day in production.",
    siteName: "Shailesh Singh — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shailesh Singh — AI Engineer · Real-time AI Systems",
    description:
      "Real-time CX pipelines, LLM analytics, and low-latency voice agents at Zykrr.",
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

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${jetbrainsMono.variable} ${inter.variable}`}
    >
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
