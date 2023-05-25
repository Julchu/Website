import { FC } from "react";
import Banner from "@/app/(page)/Banner";
import Image from "next/image";

const Slide0: FC = () => {
  return (
    <section className={"relative h-full snap-center "}>
      <Image
        src={"/home.png"}
        alt={"Patagonia Mountains"}
        fill={true}
        style={{ objectFit: "cover", objectPosition: "bottom" }}
        placeholder={"blur"}
        blurDataURL={"/home.png"}
        sizes={"100vw"}
      />
      <Banner
        title={"Why hire Julian?"}
        subtitle={"Why you should hire Julian as a Software Developer"}
      />
    </section>
  );
};
// background-position: bottom;
// objectFit="cover"
// quality={100}

export default Slide0;