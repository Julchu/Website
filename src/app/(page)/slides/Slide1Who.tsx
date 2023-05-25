import { FC } from "react";
import Title from "@/app/(page)/Title";

const Slide1: FC = () => {
  return (
    <section className={"h-screen snap-center bg-white"}>
      <Title title={"Who is Julian?"} />
    </section>
  );
};

export default Slide1;