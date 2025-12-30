import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Aggelos Giannoulis – Contemporary Visual Artist",
    template: "%s | Aggelos Giannoulis",
  },
  description:
    "Portfolio of Aggelos Giannoulis (Άγγελος Γιαννούλης), a contemporary visual artist specializing in painting. MFA graduate from Aristotle University of Thessaloniki with distinction.",
  keywords: [
    "visual artist",
    "painter",
    "contemporary art",
    "painting",
    "Thessaloniki",
    "Greece",
    "Aggelos Giannoulis",
    "Άγγελος Γιαννούλης",
    "fine arts",
  ],
  authors: [{ name: "Aggelos Giannoulis" }],
  creator: "Aggelos Giannoulis",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aggelos Giannoulis",
    title: "Aggelos Giannoulis – Contemporary Visual Artist",
    description:
      "Portfolio of Aggelos Giannoulis, a contemporary visual artist specializing in painting from Thessaloniki, Greece.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aggelos Giannoulis – Contemporary Visual Artist",
    description:
      "Portfolio of Aggelos Giannoulis, a contemporary visual artist specializing in painting.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          <main className="pt-16 md:pt-20 min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
