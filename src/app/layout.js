// layout.js
import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"
import localFont from "next/font/local";
import Providers from "./provider";

const inter = Inter({ subsets:  ["latin"] })


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Trillo",
  description: "Booking your journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  )
}
