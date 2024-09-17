import BlurFade from "@/components/magicui/blur-fade";
import ilustration from "../../../assets/ilustration3.png";
import { CarouselDemo } from "./Carousel";

function Proyects() {
  return (
    <div className="px-4 py-8 sm:px-4 flex justify-center">
      <div className="max-w-[960px] w-full ">
        <BlurFade delay={0.25} inView>
          <h4 className="mb-2 font-bold text-blue-600">¿Que realicé?</h4>{" "}
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h3 className="text-5xl mb-1 font-extrabold">PROYECTOS</h3>
          <div className="m-0 h-1 w-40 bg-blue-600 mb-8"></div>
        </BlurFade>
        <div className="flex flex-col flex-wrap items-center justify-evenly gap-8 sm:flex-row">
          <div>
            <img src={ilustration} alt="Persona trabajando" className="w-96" />
          </div>
          <CarouselDemo />
        </div>
      </div>
    </div>
  );
}

export default Proyects;
