import BlurFade from "@/components/magicui/blur-fade";
import ilustration from "../../../assets/ilustration3.png";
import { Formulario } from "./Formulario";

function Contact() {
  return (
    <div id="contact" className="px-4 py-8 sm:px-4 flex justify-center">
      <div className="max-w-[960px] w-full ">
        <BlurFade delay={0.25} inView>
          <h4 className="mb-2 font-bold text-blue-600">¿Trabajamos juntos?</h4>{" "}
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h3 className="text-5xl mb-1 font-extrabold">CONTACTO</h3>
          <div className="m-0 h-1 w-40 bg-blue-600 mb-8"></div>
        </BlurFade>
        <BlurFade delay={0.7} inView>
          <div className="w-full flex flex-col flex-wrap items-center justify-center sm:flex-row">
            <div className="w-full flex justify-center md:w-1/2">
              <img
                src={ilustration}
                alt="Persona trabajando"
                className="w-96"
              />
            </div>

            <div className="w-full  shadow-md md:w-1/2 flex justify-center rounded-xl">
              <Formulario />
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}

export default Contact;
