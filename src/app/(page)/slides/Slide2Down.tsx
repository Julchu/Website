import { FC } from "react";
import Banner from "@/app/(page)/Banner";

const Slide2: FC = () => {
  return (
    <section
      className={
        "relative h-screen snap-center bg-[url('/presentation.png')] bg-cover bg-top"
      }
    >
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