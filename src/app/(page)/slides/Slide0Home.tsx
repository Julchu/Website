import { FC } from "react";
import Banner from "@/app/(page)/Banner";
import Image from "next/image";
import HomeImage from "/public/home.jpeg";

const Slide0: FC = () => {
  return (
    <section className={"relative h-full snap-center "}>
      <Image
        src={HomeImage}
        alt={"Patagonia mountains"}
        fill={true}
        style={{ objectFit: "cover", objectPosition: "bottom" }}
        placeholder={"blur"}
        quality={100}
        sizes={"100vw"}
        priority
      />
      <Banner
        title={"Hi, I'm Julian!"}
        subtitle={"Welcome to my life as a full stack developer"}
      />
    </section>
  );
};

export default Slide0;