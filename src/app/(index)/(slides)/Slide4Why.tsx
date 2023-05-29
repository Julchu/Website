import { FC } from "react";
import Heading from "@/app/(index)/Heading";
import MlhImage from "/public/mlh.jpeg";
import Image from "next/image";

const Slide4: FC = () => {
  return (
    <section className={"relative flex h-screen snap-center flex-col 4k:h-2k"}>
      <Heading title={"Why you want to hire Julian"} />

      <div className={"flex w-full flex-1 gap-x-16"}>
        <List />

        <Images />
      </div>
    </section>
  );
};

const List: FC = () => {
  const list: {
    text?: string;
    heading?: boolean;
    bullet?: boolean;
    indented?: true;
  }[] = [
    { text: "I am enthusiastic", heading: true },
    {
      text: "I'm friendly, calm under stress, and I'm hard to offend",
      bullet: true,
    },
    { text: "I fully commit to projects I’m passionate about", bullet: true },
    { text: "I love learning", heading: true },
    {
      text: "I love picking up and incorporating new technologies",
      bullet: true,
    },
    {
      text: "I take feedback very well, and adapt to the suggestions",
      bullet: true,
    },

    { text: "I enjoy collaborating", heading: true },
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
        "lg:flex-0 flex h-full flex-col justify-around py-top-md pl-left-sm text-sm md:pl-left-md md:text-base lg:w-[50%] lg:pl-left-lg lg:text-lg/[2em] xl:text-xl/[2em] 2xl:text-2xl/[2em] 2k:text-3xl/[2em]"
      }
    >
      {list.length > 0
        ? list.map(({ text, indented, bullet, heading }, listIndex) => {
            if (heading)
              return (
                <h1
                  key={`slide1_list_${listIndex}`}
                  className={
                    "pl-left-sm xl:text-3xl/[4em] 2xl:text-4xl/[3em] 2k:text-5xl/[2em]"
                  }
                >
                  <b>{text}</b>
                </h1>
              );
            else
              return (
                <p
                  key={`slide1_list_${listIndex}`}
                  className={`md:pl-left-md xl:text-xl/[4em] 2xl:text-2xl/[3em] 2k:text-3xl/[2em]`}
                >
                  {bullet ? "—" : ""}&nbsp;{text}
                </p>
              );
          })
        : null}
    </div>
  );
};

const Images: FC = () => {
  return (
    <div className={"relative my-auto lg:w-[40vw]"}>
      <Image
        className={"animate-fadeIn bg-black"}
        src={MlhImage}
        alt={"Hackathon"}
        placeholder={"blur"}
        quality={100}
        priority
      />
      <p
        className={
          "lg:text-md relative mx-auto w-fit text-gray-500 2k:text-2xl"
        }
      >
        How everyone&apos;s faces would be if they had a Julian on their team
      </p>
    </div>
  );
};

export default Slide4;