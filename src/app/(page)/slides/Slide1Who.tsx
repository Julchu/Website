import { FC } from "react";
import Heading from "@/app/(page)/Heading";
import Image from "next/image";
import PoutineImage from "/public/poutine.jpeg";

const Slide1: FC = () => {
  return (
    <section className={"flex h-screen flex-1 snap-center flex-col bg-white"}>
      <Heading title={"Who is Julian?"}/>
      
      <div className={"flex w-full flex-1"}>
        <List/>
        
        <Images/>
      </div>
    </section>
  );
};

const List: FC = () => {
  const list: {
    title?: string;
    text?: string;
    indented?: true;
  }[] = [
    {title: "Adventurer"},
    {
      text: "Road tripped to West Virginia, kayaking one of the world’s oldest rivers", indented: true
    },
    {
      text: "Climbed Chile’s Patagonia to gaze upon the majestic Torres Del Paine", indented: true
    },
    {title: "Car guy", text: "(dad was an amateur collector)"},
    {
      title: "Aspiring dog-father", text: "(Corgis are basically loaves of bread with feet)",
    },
    {title: "Sailor", text: "(used to compete in Quebec, Canada)"},
    {
      title: "Foodie", text: "(I’m a picky eater, so I spend a lot of time researching foods I enjoy)",
    },
    {
      text: "Ex-accountant from Montreal who wanted to transition into a creative career, graduating in Computer Science at Wilfrid Laurier University",
    },
  ];
  return (
    <div
      className={'flex w-[65vw] flex-0 flex-col py-[8cqh] pl-[10cqw] text-[1.3cqw]/[1.3cqw]'}
    >
      {list.length > 0
        ? list.map(({title, text, indented}, listIndex) => {
          return (
            <p key={`slide1_list_${listIndex}`}
               className={`flex-1 ${indented ? 'pl-[5cqw]' : ''}`}>
              &mdash;&nbsp;<b>{title}</b>&nbsp;
              {text}
            </p>
          )
        }) : null}
    </div>
  );
};

const Images: FC = () => {
  return (
    <div className={'flex flex-col flex-1'}>
      <div className={"w-[50%]"}>
        <Image
          className={'drop-shadow-[0px_3px_6px_rgba(0,0,0,0.9)]'}
          src={PoutineImage}
          alt={"Poutine shirt"}
          placeholder={"blur"}
          quality={100}
          priority
        />
      </div>
      {/*  <div className={"w-[50%]"}>*/}
      {/*    <Image*/}
      {/*      src={PianoImage}*/}
      {/*      alt={"Piano"}*/}
      {/*      // fill={true}*/}
      {/*      // style={{ objectFit: "cover", objectPosition: "bottom" }}*/}
      
      {/*      style={{ borderRadius: "10px" }}*/}
      {/*      placeholder={"blur"}*/}
      {/*      quality={100}*/}
      {/*      height={500}*/}
      {/*      width={500}*/}
      {/*      // sizes={"500px"}*/}
      {/*      priority*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className={"w-[50%]"}>*/}
      {/*    <Image*/}
      {/*      src={PatagoniaImage}*/}
      {/*      alt={"Torres Del Paine"}*/}
      {/*      // fill={true}*/}
      {/*      // style={{ objectFit: "cover", objectPosition: "bottom" }}*/}
      {/*      style={{ borderRadius: "10px" }}*/}
      {/*      placeholder={"blur"}*/}
      {/*      quality={100}*/}
      {/*      height={500}*/}
      {/*      width={500}*/}
      {/*      // sizes={"500px"}*/}
      {/*      priority*/}
      {/*    />*/}
      {/*  </div>*/}
    </div>
  );
};

export default Slide1;