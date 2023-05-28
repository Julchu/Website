import { FC } from "react";
import Heading from "@/app/(index)/Heading";
import Image from "next/image";
import VoyagerImage from "/public/voyagers.jpeg";

const Slide5: FC = () => {
  return (
    <section className={"flex h-screen snap-center flex-col 4k:h-2k"}>
      <Heading title={"What experience Julian brings"} />

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
        "relative m-auto lg:w-[350px] xl:w-[450px] 2xl:w-[550px] 2k:w-[650px]"
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
        src={VoyagerImage}
        alt={"Via Ferrata"}
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
    {
      title: "Voyagers",
      text: "Toronto, Dec 2022 – Present",
    },
    {
      text: "Built social travel platform that facilitates organizing trips and collaborating with travel mates to create personalized itineraries, and offer a search portal to connect like-minded individuals wanting to avoid travelling alone",
      bullet: true,
    },
    {
      text: "Enables users and their travel mates to plan routes and share saved locations in real time",
      bullet: true,
    },
    {
      bullet: true,
      text: "Allows users to publicly share their experiences and reviews to provide valuable guidance and recommendations",
    },
  ];
  return (
    <div
      className={
        "flex-0 align-items flex w-[50%] flex-col content-around py-top-md md:pl-left-md xl:text-xl/[1.5em] 2xl:text-2xl/[1.5em] 2k:text-3xl/[1.5em]"
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

export default Slide5;