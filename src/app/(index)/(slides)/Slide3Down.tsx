import { FC } from "react";
import Banner from "@/app/(index)/Banner";
import Image from "next/image";
import PresentationImage from "/public/presentation.jpeg";

const Slide3: FC = () => {
  return (
    <section className={"relative h-screen snap-center 4k:h-2k"}>
      <div className={"absolute h-full w-full animate-fadeIn bg-black"}>
        <Image
          className={"object-cover object-top"}
          src={PresentationImage}
          alt={"Presentation"}
          fill={true}
          placeholder={"blur"}
          quality={100}
          priority
        />
      </div>
      <Banner
        title={"Down to the details"}
        subtitle={"3 years of experience bringing startups from 0 -> 1"}
      />
    </section>
  );
};

export default Slide3;