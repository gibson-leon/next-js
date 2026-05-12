import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
})






export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${roboto.variable} ${roboto.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
