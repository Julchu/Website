import { FC } from "react";

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={"sticky bottom-[60%] pl-20 pt-20"}>
      <h1 className={"text-6xl font-bold"}>{title}</h1>
    </div>
  );
};

export default Title;