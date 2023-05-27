import { FC } from "react";
import Heading from "@/app/(index)/Heading";

const Slide3: FC = () => {
  return (
    <section className={"relative flex h-screen snap-center flex-col 4k:h-2k"}>
      <Heading title={"Why you want to hire Julian"} />

      <div className={"flex w-full flex-1"}>
        <List />
      </div>
    </section>
  );
};

const List: FC = () => {
  const list: {
    title?: string;
    text?: string;
    bullet?: boolean;
    indented?: true;
  }[] = [
    { title: "I am enthusiastic" },
    {
      text: "I'm friendly, calm under stress, and I'm hard to offend",
      bullet: true,
    },
    { text: "I fully commit to projects I’m passionate about", bullet: true },
    { title: "I love learning" },
    {
      text: "I love picking up and incorporating new technologies",
      bullet: true,
    },
    {
      text: "I take feedback very well, and adapt to the suggestions",
      bullet: true,
    },

    { title: "I enjoy collaborating" },
    {
      text: "I’m not a scared (or scary) antisocial software developer",
      bullet: true,
    },
    {
      text: "I empathize and listen to others, and offer strong opinions",
      bullet: true,
    },
  ];

  return (
    <div
      className={
        "flex-0 flex w-[50%] flex-col py-[8cqh] pl-[10cqw] text-[1.3cqw]/[1.3cqw]"
      }
    >
      {list.length > 0
        ? list.map(({ title, text, indented, bullet }, listIndex) => {
            return (
              <>
                <p
                  key={`slide1_list_${listIndex}`}
                  className={`flex-1 ${indented ? "pl-[5cqw]" : ""}`}
                >
                  {bullet ? "—" : ""}&nbsp;
                  {text}
                </p>
                <h1>{title}</h1>
              </>
            );
          })
        : null}
    </div>
  );
};

export default Slide3;