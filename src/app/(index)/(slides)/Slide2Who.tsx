import { FC } from "react";
import Heading from "@/app/(index)/Heading";
import Image from "next/image";
import PoutineImage from "/public/poutine.jpeg";
import PianoImage from "/public/piano.jpeg";
import PatagoniaImage from "/public/patagonia.jpeg";
import WhoImage from "/public/who.jpeg";

const Slide2: FC = () => {
  return (
    <section className={"flex h-screen snap-center flex-col 4k:h-2k"}>
      <Heading title={"Who is Julian?"} />

      {/* Breakout of container */}
      {/*<div*/}
      {/*  className={"relative left-1/2 right-1/2 -ml-[50vw] h-full bg-blue-800"}*/}
      {/*/>*/}

      <div className={"flex w-full flex-1 gap-x-16"}>
        <List />

        <Images />
      </div>
    </section>
  );
};

const Images: FC = () => {
  return (
    <div
      className={
        "relative my-auto lg:w-[350px] xl:w-[450px] 2xl:w-[550px] 2k:w-[650px]"
      }
    >
      <p
        className={
          "lg:text-md absolute z-50 text-gray-500 lg:right-[-15%] lg:top-[10%] xl:right-[-10%] 2xl:right-[0%] 2k:text-2xl"
        }
      >
        Yep, I speak French
      </p>
      <Image
        className={"animate-fadeIn bg-black"}
        src={WhoImage}
        alt={"Poutine shirt"}
        placeholder={"blur"}
        quality={100}
        priority
      />
      <p
        className={"lg:text-md relative my-auto mt-5 text-gray-500 2k:text-2xl"}
      >
        Exploring the abundant art in Chile, and climbing the Patagonia&apos;s
      </p>
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
        "flex-0 flex w-[60%] flex-col py-top-md md:pl-left-md xl:text-xl/[1.5em] 2xl:text-2xl/[1.5em] 2k:text-3xl/[1.5em]"
      }
    >
      {list.length > 0
        ? list.map(({ title, text, indented, bullet }, listIndex) => {
            return (
              <p
                key={`slide1_list_${listIndex}`}
                className={`flex-1 ${indented ? "md:pl-left-md" : ""}`}
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

const OldImages: FC = () => {
  return (
    <div
      className={
        "relative flex flex-1 flex-col lg:bg-gray-500 xl:bg-yellow-500 2xl:bg-green-500 2k:bg-blue-500 4k:bg-red-500"
      }
    >
      <div className={"relative h-full"}>
        <div
          className={
            "absolute bottom-[650px] left-[100px] flex flex-row content-center"
          }
        >
          <div
            className={
              "animate-fadeIn overflow-hidden bg-black drop-shadow-sideImage lg:h-[auto] lg:w-[200px] xl:h-[auto] xl:w-[250px] 2xl:h-[auto] 2xl:w-[300px] 2k:h-[auto] 2k:w-[350px]"
            }
          >
            <Image
              className={
                "aspect-auto scale-[2] overflow-hidden object-contain object-poutine"
              }
              src={PoutineImage}
              alt={"Poutine shirt"}
              placeholder={"blur"}
              quality={100}
              priority
            />
          </div>
          <p className={"z-50 my-auto ml-5 h-fit text-2xl text-gray-500"}>
            Yep, I speak French
          </p>
        </div>

        {/*lg:h-[300px] lg:w-[250px]*/}
        <div
          className={
            "absolute bottom-[220px] animate-fadeIn bg-black lg:h-[400px] lg:w-[270px] 2k:h-[500px] 2k:w-[370px]"
          }
        >
          <Image
            className={"drop-shadow-sideImage"}
            src={PianoImage}
            alt={"Piano"}
            placeholder={"blur"}
            quality={100}
            priority
          />
        </div>

        <div
          className={
            "absolute bottom-[240px] left-[330px] animate-fadeIn bg-black 2k:h-[500px] 2k:w-[400px]"
          }
        >
          <Image
            className={"drop-shadow-sideImage"}
            src={PatagoniaImage}
            alt={"Torres Del Paine"}
            placeholder={"blur"}
            quality={100}
            priority
          />
        </div>
        <p className={"absolute bottom-[140px] text-2xl text-gray-500"}>
          Exploring the abundant art in Chile, and climbing the Patagonia&apos;s
        </p>
      </div>
    </div>
  );
};

export default Slide2;