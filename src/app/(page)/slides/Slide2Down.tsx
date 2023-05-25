import { FC } from "react";
import Banner from "@/app/(page)/Banner";
import Image from "next/image";

const Slide2: FC = () => {
  return (
    <section className={"relative h-full snap-center"}>
      <Image
        src={"/presentation.png"}
        alt={"Presentation"}
        fill={true}
        style={{ objectFit: "cover", objectPosition: "top" }}
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