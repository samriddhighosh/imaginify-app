import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  
} from '@clerk/nextjs'

const IBMSans = IBM_Plex_Sans({
  weight: ['400','500','600','700'],
  variable: "--font-IBM-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary: '#624cf5'}}}>
      <html lang="en">
        <body
          className={`${IBMSans.variable} antialiased`}
        >
          {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
