import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CaptionProvider } from '@/Context/CaptionContext'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Free font Generator,Captions and Bios",
  description: "Welcome to our creative hub, where you'll find everything you need to enhance your online presence. Our font generator allows you to give your captions and bios a fresh look, adding a touch of flair to your personality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CaptionProvider >
      <Header/>
      <NextTopLoader />
      {children}
      <Footer/>
      </CaptionProvider>

        
        </body>
    </html>
  );
}
