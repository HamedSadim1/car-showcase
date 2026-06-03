import "./globals.css";
import { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer, NavBar } from "@/components";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "optional",
});

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="relative font-[family-name:var(--font-manrope)]">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
