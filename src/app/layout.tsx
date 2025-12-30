import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Aggelos Giannoulis – Visual Artist",
    template: "%s | Aggelos Giannoulis",
  },
  description:
    "Portfolio of Aggelos Giannoulis, a Berlin-based visual artist exploring memory, migration, and urban narratives through painting, illustration, and mixed media.",
  keywords: [
    "visual artist",
    "painter",
    "illustrator",
    "Berlin",
    "contemporary art",
    "mixed media",
    "Aggelos Giannoulis",
  ],
  authors: [{ name: "Aggelos Giannoulis" }],
  creator: "Aggelos Giannoulis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aggelosgiannoulis.com",
    siteName: "Aggelos Giannoulis",
    title: "Aggelos Giannoulis – Visual Artist",
    description:
      "Portfolio of Aggelos Giannoulis, a Berlin-based visual artist exploring memory, migration, and urban narratives.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aggelos Giannoulis – Visual Artist",
    description:
      "Portfolio of Aggelos Giannoulis, a Berlin-based visual artist.",
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
