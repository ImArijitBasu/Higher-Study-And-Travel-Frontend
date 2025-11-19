import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans", 
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Study & Travel",
  description:
    "A complete guidance platform for studying abroad, university search, scholarship information, visa support and global travel assistance. Discover courses, compare countries and plan your future with confidence.",
  keywords: [
    "Study Abroad",
    "Student Visa",
    "Scholarship",
    "University Admission",
    "Travel Support",
    "International Study",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Study & Travel",
    description:
      "Your trusted platform for studying abroad and global travel planning.",
    url: "https://higherstudyusa.com",
    siteName: "Study & Travel",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
      >
        <Navbar />
        <div className=" mx-auto ">{children}</div>
        <Footer />
        <ToastContainer position="top-center" autoClose={3000} />
      </body>
    </html>
  );
}
