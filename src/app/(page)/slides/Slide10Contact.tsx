import { FC } from "react";
import Contact from "@/app/(page)/Contact";
import Image from "next/image";
import ContactImage from "/public/contact-color.jpeg";

const Slide10: FC = () => {
  return (
    <section className={"relative h-full snap-center "}>
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
        phone={"(437)-324-7100"}
        email={"JChuMTL@gmail.com"}
        github={"https://github.com/JulChu"}
        linkedin={"https://www.linkedin.com/in/JulianChuMTL"}
      />
    </section>
  );
};

export default Slide10;