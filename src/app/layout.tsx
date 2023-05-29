import "./globals.css";
import { Amatic_SC, Inter, Montserrat, Poppins } from "next/font/google";
import { FC, ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const amaticSC = Amatic_SC({ subsets: ["latin"], weight: "400" });
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Julian's Website",
  description: "Welcome to Julian's website",
};

// xl:bg-yellow-500 2xl:bg-green-500 2k:bg-blue-500 4k:bg-red-500
const Breakpoints: FC = () => {
  return (
    <div
      className={
        "pointer-events-none absolute z-50 flex h-full w-full flex-col bg-blue-300/10 text-3xl md:text-9xl"
      }
    >
      <div className={"relative flex flex-col"}>
        {/* SM */}
        <p className={"visible m-auto md:invisible"}>Under MD</p>
        {/* MD */}
        <p className={"invisible m-auto md:visible lg:invisible"}>MD</p>
        {/* LG */}
        <p className={"invisible m-auto lg:visible xl:invisible"}>LG</p>
        {/* XL */}
        <p className={"invisible m-auto xl:visible 2xl:invisible"}>XL</p>
        {/* 2XL */}
        <p className={"invisible m-auto 2xl:visible 2k:invisible"}>2XL</p>
        {/* 2K */}
        <p className={"invisible m-auto 2k:visible 4k:invisible"}>2K</p>
        {/* 4K */}
        <p className={"invisible m-auto 4k:visible"}>4K</p>
      </div>
    </div>
  );
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {/*<Breakpoints />*/}
        {children}
        <Analytics />
      </body>
    </html>
  );
}