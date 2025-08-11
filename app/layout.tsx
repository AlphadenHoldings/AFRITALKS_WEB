import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AfriTalks",
  description:
    "Afritalks - Your trusted platform for secure messaging and communication across Africa",
  icons: {
    icon: "/icons/logo_black.svg",
    shortcut: "/icons/logo_black.svg",
    apple: "/icons/apple_fill.svg",
  },
  openGraph: {
    title: "AfriTalks",
    description:
      "Afritalks - Your trusted platform for secure messaging and communication across Africa",
    images: [
      {
        url: "/icons/logo_black.svg",
        width: 1200,
        height: 630,
        alt: "Afritalks Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AfriTalks",
    description:
      "Afritalks - Your trusted platform for secure messaging and communication across Africa",
    images: ["/icons/logo_black.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
