import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { AudioProvider } from "./components/Audio";
import NextTopLoader from 'nextjs-toploader'
import { TransitionProvider } from "./components/TransitionContext";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antariksha",
  description: "Agency beyond the universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextTopLoader
          color="#f97316"
          height={3}
          showSpinner={false}
        />
        <Cursor />
        <AudioProvider>
          <TransitionProvider>
            <PageTransition />
            <Navbar />
            {children}
            <div style={{ marginTop: '-2px', position: 'relative', zIndex: 30 }}>
              <Footer />
            </div>
          </TransitionProvider>
        </AudioProvider>
      </body>
    </html>
  );
}
