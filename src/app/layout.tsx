import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../shared/styles/globals.css";
import Providers from "@/shared/utils/Providers";
import localFont from "next/font/local";
import { ClerkProvider } from '@clerk/nextjs'


const clashDisplay = localFont({
  src: "../assets/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clashDisplay",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Bulletinify",
  description: "Create, send, and track custom newsletters effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${clashDisplay.variable}`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
