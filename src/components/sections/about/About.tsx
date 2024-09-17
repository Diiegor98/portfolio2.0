import AboutCards from "./AboutCards";
import AboutDescription from "./AboutDescription";
//import AboutSkills from "./AboutSkills";
import BlurFade from "@/components/magicui/blur-fade";
import ilustration from "../../../assets/ilustration1.png"

function About() {
  return (
    <section id="about" className="px-4 py-8 sm:px-4 flex justify-center">
      <div className="max-w-[960px]">
        <BlurFade delay={0.25} inView>
          <h4 className="mb-2 font-bold text-blue-600">¿Quién soy?</h4>{" "}
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h3 className="text-5xl mb-1 font-extrabold">SOBRE MÍ</h3>
          <div className="m-0 h-1 w-40 bg-blue-600 mb-8"></div>
        </BlurFade>
        <div className="flex flex-col justify-center items-center mb-10 md:flex-row gap-7">
          <BlurFade delay={0.75} inView>
            <AboutDescription />
          </BlurFade>
          <BlurFade delay={1} inView>
            {/* <AboutSkills /> */}
            <img src={ilustration} alt="Representación mía" className="w-72" />
          </BlurFade>
        </div>
        <AboutCards />
      </div>
    </section>
  );
}

export default About;
