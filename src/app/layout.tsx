import "./globals.css";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Julian's Website",
  description: "Welcome to Julian's website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}