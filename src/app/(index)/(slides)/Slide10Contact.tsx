import { FC } from "react";
import Contact from "@/app/(index)/Contact";
import Image from "next/image";
import ContactImage from "/public/contact-color.jpeg";

const Slide10: FC = () => {
  return (
    <section className={"relative flex h-screen snap-center flex-col 4k:h-2k"}>
      <Image
        src={ContactImage}
        alt={"Vancouver pagoda"}
        fill={true}
        style={{ objectFit: "cover", objectPosition: "center top" }}
        placeholder={"blur"}
        quality={100}
        sizes={"100vw"}
        priority
      />
      <Contact
        title={"Contact"}
        email={"JChuMTL@gmail.com"}
        github={"https://github.com/JulChu"}
        linkedin={"https://www.linkedin.com/in/JulianChuMTL"}
      />
    </section>
  );
};

export default Slide10;