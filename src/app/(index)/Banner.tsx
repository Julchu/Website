import { FC } from "react";

const Banner: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div
      className={
        "backdrop-brightness-5 relative top-[60%] z-10 flex h-[30%] flex-col place-content-center gap-y-3 bg-white/5 px-left-sm leading-loose text-white backdrop-blur-sm md:pl-left-md lg:pl-left-lg"
      }
    >
      <h1
        className={
          "text-[2rem]/[1.1em] md:text-[4rem]/[1.1em] lg:text-[4.5rem]/[1.1em] xl:text-[6.5rem]/[1.1em] 2xl:text-[8.5rem]/[1.1em] 2k:text-[12.5rem]/[1.1em]"
        }
      >
        {title}
      </h1>
      <h3
        className={
          "sm:text-[1rem]/[1.1em] lg:text-[1.5rem]/[1.1em] xl:text-[2rem]/[1.1em] 2xl:text-[2.5rem]/[1.1em] 2k:text-[4rem]/[1.1em]"
        }
      >
        {subtitle}
      </h3>
    </div>
  );
};

export default Banner;