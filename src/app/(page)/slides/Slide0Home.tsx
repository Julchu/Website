import { FC } from "react";
import Banner from "@/app/(page)/Banner";
import Image from "next/image";
import HomeImage from "/public/home.jpeg";

const Slide0: FC = () => {
  return (
    <section className={"relative h-full snap-center "}>
      <Image
        src={HomeImage}
        alt={"Patagonia Mountains"}
        fill={true}
        style={{ objectFit: "cover", objectPosition: "bottom" }}
        placeholder={"blur"}
        sizes={"100vw"}
      />
      <Banner
        title={"Hi, I'm Julian!"}
        subtitle={"Why you should hire Julian as a Software Developer"}
      />
    </section>
  );
};

export default Slide0;