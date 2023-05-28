import { FC } from "react";
import Banner from "@/app/(index)/Banner";
import Image from "next/image";
import PresentationImage from "/public/presentation.jpeg";

const Slide2: FC = () => {
  return (
    <section className={"relative h-screen snap-center 4k:h-2k"}>
      <div className={"absolute z-0 h-[100%] w-[100%] animate-fadeIn bg-black"}>
        <Image
          src={PresentationImage}
          alt={"Presentation"}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "top" }}
          placeholder={"blur"}
          quality={100}
          sizes={"100vw"}
          priority
        />
      </div>
      <Banner
        title={"Down to the details"}
        subtitle={
          "How this could work for you and why Julian is the right fit\n"
        }
      />
    </section>
  );
};

export default Slide2;