import Slide0 from "@/app/(page)/slides/Slide0Home";
import Slide1 from "@/app/(page)/slides/Slide1Who";
import Slide2 from "@/app/(page)/slides/Slide2Down";
import Slide3 from "@/app/(page)/slides/Slide3Why";
import Slide4 from "@/app/(page)/slides/Slide4ExpFluxon";
import Slide5 from "@/app/(page)/slides/Slide5ExpPrev";
import Slide6 from "@/app/(page)/slides/Slide6ProjectsPricey";
import Slide7 from "@/app/(page)/slides/Slide7ProjectsTeaWork";
import Slide8 from "@/app/(page)/slides/Slide8ProjectsMobile";
import Slide9 from "@/app/(page)/slides/Slide9ProjectsReact";
import Slide10 from "@/app/(page)/slides/Slide10Contact";

// Every URL directory has a `(page).js`, including subdirectories
// `app/(page).tsx` is the UI for the `/` URL
export default function Home() {
  return (
    <main
      className={
        "relative h-screen snap-y snap-mandatory overflow-y-scroll"
      }
    >
      <Slide0 />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
      <Slide9 />
      <Slide10 />
    </main>
  );
}