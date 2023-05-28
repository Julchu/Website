import { FC } from "react";
import Banner from "@/app/(index)/Banner";
import Image from "next/image";
import HomeImage from "/public/home.jpeg";

const Slide0: FC = () => {
  return (
    <section className={"relative h-screen snap-center 4k:h-2k"}>
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

      <Banner
        title={"Why hire Julian?"}
        subtitle={"Why you should hire Julian as a Full Stack Developer"}
      />
    </section>
  );
};

export default Slide0;