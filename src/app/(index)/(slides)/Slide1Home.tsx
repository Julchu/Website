import { FC } from "react";
import Banner from "@/app/(index)/Banner";
import Image from "next/image";
import HomeImage from "/public/home.jpeg";

const Slide1: FC = () => {
  return (
    <section className={"relative h-[100svh] snap-center 4k:h-2k"}>
      <div className={"absolute h-full w-full animate-fadeIn bg-black"}>
        <Image
          className={"object-cover object-bottom"}
          src={HomeImage}
          alt={"Patagonia mountains"}
          fill={true}
          placeholder={"blur"}
          quality={100}
          priority
        />
      </div>

      <Banner title={"Hi, I'm Julian"} subtitle={"Welcome, bienvenue, 歡迎!"} />
    </section>
  );
};

export default Slide1;