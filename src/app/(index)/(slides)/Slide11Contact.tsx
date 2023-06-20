import { FC } from "react";
import Contact from "@/app/(index)/Contact";
import Image from "next/image";
import ContactImage from "/public/contact-color.jpeg";
import Banner from "@/app/(index)/Banner";

const Slide10: FC = () => {
  return (
    <section className={"relative h-screen snap-center 4k:h-2k"}>
      <div className={"absolute h-full w-full animate-fadeIn bg-black"}>
        <Image
          className={"object-cover object-[center_top]"}
          src={ContactImage}
          alt={"Vancouver pagoda"}
          fill={true}
          placeholder={"blur"}
          quality={100}
          priority
        />
      </div>
      <Banner
        title={"Pages in progress"}
        subtitle={"Contact me at JulianChuTOR@gmail.com"}
      />

      {/*<Contact*/}
      {/*  title={"Contact"}*/}
      {/*  email={"JChuMTL@gmail.com"}*/}
      {/*  github={"https://github.com/JulChu"}*/}
      {/*  linkedin={"https://www.linkedin.com/in/JulianChuMTL"}*/}
      {/*/>*/}
    </section>
  );
};

export default Slide10;