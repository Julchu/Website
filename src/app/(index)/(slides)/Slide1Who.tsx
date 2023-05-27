import { FC } from "react";
import Heading from "@/app/(index)/Heading";
import Image from "next/image";
import PoutineImage from "/public/poutine.jpeg";
import PianoImage from "/public/piano.jpeg";
import PatagoniaImage from "/public/patagonia.jpeg";

const Slide1: FC = () => {
  return (
    <section className={"flex h-screen flex-1 snap-center flex-col 4k:h-2k"}>
      <Heading title={"Who is Julian?"} />

      {/* Breakout of container */}
      {/*<div*/}
      {/*  className={"relative left-1/2 right-1/2 -ml-[50vw] h-full bg-blue-800"}*/}
      {/*/>*/}

      <div className={"flex w-full flex-1"}>
        <List />

        <Images />
      </div>
    </section>
  );
};

const Images: FC = () => {
  return (
    <div className={"relative hidden flex-1 flex-col lg:flex"}>
      <div className={"absolute bottom-[500px] left-[150px] h-auto w-[350px]"}>
        <Image
          className={
            "object-none object-[right_0px_bottom_0px] drop-shadow-sideImage"
          }
          src={PoutineImage}
          alt={"Poutine shirt"}
          placeholder={"blur"}
          quality={100}
          priority
        />
      </div>

      <div className={"absolute bottom-[200px] w-[370px]"}>
        <Image
          className={"drop-shadow-sideImage"}
          src={PianoImage}
          alt={"Piano"}
          placeholder={"blur"}
          quality={100}
          priority
        />
      </div>

      <div className={"absolute bottom-[180px] left-[330px] w-[400px]"}>
        <Image
          className={"drop-shadow-sideImage"}
          src={PatagoniaImage}
          alt={"Torres Del Paine"}
          placeholder={"blur"}
          quality={100}
          priority
        />
      </div>
    </div>
  );
};

const List: FC = () => {
  const list: {
    title?: string;
    text?: string;
    bullet?: boolean;
    indented?: boolean;
  }[] = [
    { title: "Adventurer", bullet: true },
    {
      text: "Road tripped to West Virginia, kayaking one of the world’s oldest rivers",
      bullet: true,
      indented: true,
    },
    {
      text: "Climbed Chile’s Patagonia to gaze upon the majestic Torres Del Paine",
      bullet: true,
      indented: true,
    },
    {
      title: "Car guy",
      bullet: true,
      text: "(dad used to collect classic cars)",
    },
    {
      title: "Aspiring dog-father",
      text: "(Corgis are basically loaves of bread with feet)",
      bullet: true,
    },
    {
      title: "Sailor",
      text: "(used to compete in Quebec, Canada)",
      bullet: true,
    },
    {
      title: "Foodie",
      text: "(I’m a picky eater, so I spend a lot of time researching foods I enjoy)",
      bullet: true,
    },
    {
      text: "Ex-accountant from Montreal who wanted to transition into a creative career, graduating in Computer Science at Wilfrid Laurier University",
      bullet: true,
    },
  ];
  return (
    <div
      className={
        "flex-0 flex w-[65%] flex-col py-[8cqh] pl-[10cqw] text-[1.3cqw]/[1.3cqw]"
      }
    >
      {list.length > 0
        ? list.map(({ title, text, indented, bullet }, listIndex) => {
            return (
              <p
                key={`slide1_list_${listIndex}`}
                className={`flex-1 ${indented ? "pl-[5cqw]" : ""}`}
              >
                {bullet ? "—" : ""}&nbsp;<b>{title}</b>&nbsp;
                {text}
              </p>
            );
          })
        : null}
    </div>
  );
};

export default Slide1;