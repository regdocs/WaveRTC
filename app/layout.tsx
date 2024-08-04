import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CallerIdProvider } from "@/contexts/CallerIdProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WaveRTC by @jayzsh",
  description: "Secure WebRTC P2P video chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full w-full'>
      <body className={inter.className}>
        <CallerIdProvider>{children}</CallerIdProvider>
      </body>
    </html>
  );
}
