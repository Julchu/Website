import { FC } from "react";

const Banner: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div
      className={
        "relative top-[60%] z-10 flex h-[30%] flex-col place-content-center gap-y-3 bg-white/5 pl-[5cqw] leading-loose text-white backdrop-blur-sm backdrop-brightness-50"
      }
    >
      <h1 className={"text-banner-h1 sm:text-banner-h1-2k"}>{title}</h1>
      <h3 className={"text-banner-h3"}>{subtitle}</h3>
    </div>
  );
};

export default Banner;