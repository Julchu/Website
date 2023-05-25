import { FC } from "react";
import Banner from "@/app/(page)/Banner";

const Slide0: FC = () => {
  return (
    <section
      className={
        "relative h-full snap-center bg-[url('/home.png')] bg-cover bg-bottom"
      }
    >
      <Banner
        title={"Why hire Julian?"}
        subtitle={"Why you should hire Julian as a Software Developer"}
      />
    </section>
  );
};

export default Slide0;