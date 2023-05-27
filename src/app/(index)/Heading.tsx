import { FC } from "react";

const Heading: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={"sticky bottom-0 pl-[5cqw] pt-[5cqw]"}>
      <h1 className={"text-heading-h1 font-bold"}>{title}</h1>
    </div>
  );
};

export default Heading;