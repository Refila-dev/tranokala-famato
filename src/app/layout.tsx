import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Famato",
  description: "Site officiel Famato",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
        bg-[url('/Zoky.jpg')] bg-cover bg-center bg-no-repeat bg-contain bg-fixed`}
      >
        <Header />
        <main> {/* ajoute un padding-top pour compenser le header fixe */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

