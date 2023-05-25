import { FC } from "react";
import Heading from "@/app/(page)/Heading";

const Slide1: FC = () => {
  return (
    <section className={"h-screen snap-center bg-white"}>
      <Heading title={"Who is Julian?"} />
    </section>
  );
};

export default Slide1;