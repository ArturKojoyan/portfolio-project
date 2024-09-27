import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Arthur's personal portfolio`,
  description: "Arthur is a Web Developer with 2+ years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 relative pt-28 sm:pt-36`}
      >
        <div
          className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[32.25rem] 
           rounded-full blur-[10rem] sm:w-[68.75rem]"
        />
        <div
          className="bg-[#7e77b1] absolute -z-10 top-[-1rem] left-[35rem] h-[31.25rem] w-[50rem] 
           rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 
           xl:left-[-15rem] 2xl:left-[-5rem] sm:block hidden"
        />
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
