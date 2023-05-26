import { FC } from "react";

const Heading: FC<{ title: string }> = ({title}) => {
  return (
    <div className={"sticky bottom-0 pt-[5cqw] pl-[5cqw]"}>
      <h1 className={"font-bold text-[4cqw]/[4cqw]"}>{title}</h1>
    </div>
  );
};

export default Heading;