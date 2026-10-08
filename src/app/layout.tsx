import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ProductProvider from "./contex/ProductContex";
import Marqee from "./components/Marqee";
import Footer from "./components/Footer";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});


export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFFF7]">
        <ProductProvider>
          <Header/>
          <Marqee />

          <main>
            {children}
          </main>
          <Footer/>
        </ProductProvider>
        </body>
    </html>
  );
}
