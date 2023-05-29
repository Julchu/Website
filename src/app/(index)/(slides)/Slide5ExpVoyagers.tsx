import { FC } from "react";
import Heading from "@/app/(index)/Heading";
import Image from "next/image";
import VoyagerImage from "/public/voyagers.jpeg";

const Slide5: FC = () => {
  return (
    <section className={"flex h-screen snap-center flex-col 4k:h-2k"}>
      <Heading title={"What experience Julian brings"} />

      <div className={"my-auto flex w-full flex-1 gap-x-16"}>
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
        Always on the lookout for unique experiences and people to share them
        with
      </p>
    </div>
  );
};

const List: FC = () => {
  const list: {
    title?: string;
    subtitle?: string;
    text?: string;
    bullet?: boolean;
    indented?: boolean;
  }[] = [
    {
      title: "Voyagers",
      subtitle: "Toronto, Dec 2022 – Present",
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
      text: "Allows users to publicly share their experiences and reviews to provide valuable guidance and recommendations",
      bullet: true,
    },
  ];
  return (
    <div
      className={
        "flex-0 flex w-[50%] flex-col pb-top-md md:pl-left-md xl:text-xl/[4em] 2xl:text-2xl/[3em] 2k:text-3xl/[2em]"
      }
    >
      {list.length > 0
        ? list.map(({ title, text, subtitle, indented, bullet }, listIndex) => {
            return (
              <div
                key={`slide1_list_${listIndex}`}
                className={`${
                  indented ? "md:pl-left-md" : ""
                } flex flex-1 flex-col`}
              >
                {bullet ? "—" : null}&nbsp;
                {title ? (
                  <p>
                    <b
                      className={
                        "xl:text-3xl/[4em] 2xl:text-4xl/[3em] 2k:text-5xl/[2em]"
                      }
                    >
                      {title}
                    </b>
                    &nbsp;
                    {subtitle ? subtitle : null}
                  </p>
                ) : text ? (
                  text
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Slide5;