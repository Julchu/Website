import { FC } from "react";
import Contact from "@/app/(page)/Contact";

const Slide10: FC = () => {
  return (
    <section
      className={
        "h-screen snap-center bg-[url('/contact.jpeg')] bg-cover bg-[center_top_10%]"
      }
    >
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