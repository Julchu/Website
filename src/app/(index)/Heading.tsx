import { FC } from "react";

const Heading: FC<{ title: string }> = ({ title }) => {
  return (
    <div
      className={
        "sticky bottom-0 pl-left-sm pt-top-sm md:pl-left-md md:pt-top-md lg:pl-left-lg"
      }
    >
      <h1
        className={
          "text-[2.5rem]/[1.1em] font-bold lg:text-[3.5rem]/[1.1em] xl:text-[4.5rem]/[1.1em] 2xl:text-[6.5rem]/[1.1em] 2k:text-[6.5rem]/[1.1em]"
        }
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;