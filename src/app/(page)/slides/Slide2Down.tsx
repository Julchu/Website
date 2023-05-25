import { FC } from "react";
import Banner from "@/app/(page)/Banner";
import Image from "next/image";
import PresentationImage from "/public/presentation.png";

const Slide2: FC = () => {
  return (
    <section className={"relative h-full snap-center"}>
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