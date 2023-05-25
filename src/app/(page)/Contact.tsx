import { FC } from "react";

const Banner: FC<{
  title: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}> = ({ title, phone, email, github, linkedin }) => {
  return (
    <div
      className={
        "relative flex h-full flex-row place-content-center items-center bg-black/0 leading-loose text-white backdrop-brightness-50"
      }
    >
      <h1 className={"text-8xl font-bold"}>{title}</h1>
      <div className={"border-l"}>
        <h3 className={"text-2xl font-bold"}>{phone}</h3>
        <h3 className={"text-2xl font-bold"}>{email}</h3>
        <h3 className={"text-2xl font-bold"}>{github}</h3>
        <h3 className={"text-2xl font-bold"}>{linkedin}</h3>
      </div>
    </div>
  );
};

export default Banner;