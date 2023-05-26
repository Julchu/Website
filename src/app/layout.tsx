import "./globals.css";
import {
  Amatic_SC,
  Inter,
  Montserrat,
  Poppins,
} from "next/font/google";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({subsets: ["latin"]});
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const amaticSC = Amatic_SC({subsets: ["latin"], weight: "400"});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Julian's Website",
  description: "Welcome to Julian's website",
};

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className={poppins.className}>
    {children}
    <Analytics/>
    </body>
    </html>
  );
}