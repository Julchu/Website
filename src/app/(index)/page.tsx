import Slide1 from "@/app/(index)/(slides)/Slide1Home";
import Slide2 from "@/app/(index)/(slides)/Slide2Who";
import Slide3 from "@/app/(index)/(slides)/Slide3Down";
import Slide4 from "@/app/(index)/(slides)/Slide4Why";
import Slide5 from "@/app/(index)/(slides)/Slide5ExpFluxon";
import Slide6 from "@/app/(index)/(slides)/Slide6ExpPrev";
import Slide7 from "@/app/(index)/(slides)/Slide7ProjectsPricey";
import Slide8 from "@/app/(index)/(slides)/Slide8ProjectsTeaWork";
import Slide9 from "@/app/(index)/(slides)/Slide9ProjectsMobile";
import Slide10 from "@/app/(index)/(slides)/Slide10ProjectsReact";
import Slide11 from "@/app/(index)/(slides)/Slide11Contact";

// Every URL directory has a `(index).js`, including subdirectories
// `app/(index).tsx` is the UI for the `/` URL
export default function Home() {
  return (
    // At 4k resolution, limit screen to 2k width
    <main
      className={
        " h-screen snap-y snap-mandatory overflow-y-scroll 4k:mx-auto 4k:max-w-screen-2k 4k:overflow-visible"
      }
    >
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      {/*<Slide5 />*/}
      {/*<Slide6 />*/}
      {/*<Slide7 />*/}
      {/*<Slide8 />*/}
      {/*<Slide9 />*/}
      {/*<Slide10 />*/}
      <Slide11 />
    </main>
  );
}