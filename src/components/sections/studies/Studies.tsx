import BlurFade from "@/components/magicui/blur-fade";
import basicIco from "../../../assets/parallel-tasks-svgrepo-com.svg";
import htmlIco from "../../../assets/html-5-svgrepo-com.svg";
import cssIco from "../../../assets/css-3-svgrepo-com.svg";
import bootstrapIco from "../../../assets/bootstrap-svgrepo-com.svg";
import tailwindIco from "../../../assets/tailwind-svgrepo-com.svg";
import nodeIco from "../../../assets/node-js-svgrepo-com.svg";
import npmIco from "../../../assets/npm-svgrepo-com.svg";
import gitIco from "../../../assets/git-svgrepo-com.svg";
import githubIco from "../../../assets/github-svgrepo-com.svg";
import javascriptIco from "../../../assets/javascript-svgrepo-com.svg";
import reactIco from "../../../assets/react-svgrepo-com.svg";
import expressIco from "../../../assets/express-svgrepo-com.svg";
import mongoIco from "../../../assets/mongo-svgrepo-com.svg";
import ilustration from "../../../assets/ilustration2.png";
import materialUI from "../../../assets/material-ui-svgrepo-com.svg";
import nextIco from "../../../assets/nexxt.svg";
import typescriptIco from "../../../assets/typescript-official-svgrepo-com.svg";

export default function Studies() {
  return (
    <section id="studies" className="px-4 py-8 sm:px-4 flex justify-center">
      <div className="max-w-[960px]">
        <BlurFade delay={0.25} inView>
          <h4 className="mb-2 font-bold text-blue-600">¿Que aprendí?</h4>{" "}
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h3 className="text-5xl mb-1 font-extrabold">ESTUDIOS</h3>
          <div className="m-0 h-1 w-40 bg-blue-600 mb-8"></div>
        </BlurFade>

        <div className="lg:p-8 flex flex-col gap-4">
          <BlurFade delay={0.25} inView>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
              <div className="gap-2 h-full rounded-lg border border-t-8 border-t-blue-500 flex flex-col justify-between items-center p-3 cursor-pointer hover:scale-105 duration-500">
                <span className="font-bold text-lg ">INTRODUCCIÓN</span>
                <span>
                  Algoritmos, estructuras de datos, arrays, listas, pilas y
                  control de flujo, condicionales, bucles, etc.
                </span>
                <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                  <img
                    src={basicIco}
                    className="w-8 "
                    alt="Introducción a la programacion"
                  />
                </div>
              </div>
              <div className="gap-2 h-full rounded-lg border border-t-8 border-t-blue-500 flex flex-col justify-between items-center p-3 cursor-pointer hover:scale-105 duration-500">
                <span className="font-bold text-lg ">HTML</span>
                <span>
                  Variedad de etiquetas HTML, contenido bien estructurado, webs
                  accesibles y semánticas. Creación y manejo de formularios.
                  Técnicas de SEO.
                </span>
                <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                  <img src={htmlIco} className="w-8 " alt="HTML" />
                </div>
              </div>
              <div className="gap-2 h-full rounded-lg border border-t-8 border-t-blue-500 flex flex-col justify-between items-center p-3 cursor-pointer hover:scale-105 duration-500">
                <span className="font-bold text-lg ">CSS Y FRAMEWORKS</span>
                <span>
                  Diseños efectivos. Metodología BEM para un código organizado.
                  Responsive design y Frameworks como Bootstrap, Tailwind y MUI.
                </span>
                <div className="flex gap-4">
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={cssIco} className="w-8 " alt="Css" />
                  </div>
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    {" "}
                    <img src={bootstrapIco} className="w-8 " alt="Bootstrap" />
                  </div>
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={tailwindIco} className="w-8 " alt="Tailwind" />
                  </div>
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={materialUI} className="w-8 " alt="Material UI" />
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div className="gap-2 h-full rounded-lg border border-t-8 border-t-blue-500 flex flex-col justify-between items-center p-3 cursor-pointer hover:scale-105 duration-500">
                <span className="font-bold text-lg ">NODE Y NPM</span>
                <span>
                  Uso de herramientas de desarrollo como Webpack, Babel y
                  ESlint. npm para dependencias y paquetes.
                </span>
                <div className="flex gap-2">
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={nodeIco} className="w-8 " alt="Node" />
                  </div>
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={npmIco} className="w-8 " alt="Npm" />
                  </div>
                </div>
              </div>
              <div className="gap-2 h-full rounded-lg border border-t-8 border-t-blue-500 flex flex-col justify-between items-center p-3 cursor-pointer hover:scale-105 duration-500">
                <span className="font-bold text-lg ">GIT Y GITHUB</span>
                <span>
                  Gestionar cambios en el código. Comandos básicos y ramas y
                  trabajo en paralelo. Github para alojar mis repositorios.
                </span>
                <div className="flex gap-2">
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={gitIco} className="w-8 " alt="Git" />
                  </div>
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={githubIco} className="w-8 " alt="Github" />
                  </div>
                </div>
              </div>
              <div className="gap-2 h-full md:col-span-2 rounded-lg border border-t-8 border-t-blue-500 flex flex-col justify-between items-center p-3 cursor-pointer hover:scale-105 duration-500">
                <span className="font-bold text-lg ">JAVASCRIPT</span>
                <span>
                  Conceptos básicos como variables, datos, operadores,
                  funciones. Me adentré en el DOM y cómo manipularlo para
                  actualizar su contenido. También investigué sobre conceptos
                  avanzados como promesas, async/await y manipulación de
                  eventos.
                </span>
                <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                  <img src={javascriptIco} className="w-8 " alt="Javascript" />
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.75} inView>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div className="gap-2 h-full md:col-span-2 rounded-lg border border-t-8 border-t-blue-500 flex flex-col justify-between items-center p-3 cursor-pointer hover:scale-105 duration-500">
                <span className="font-bold text-lg ">REACT Y LIBRERÍAS</span>
                <span>
                  Creación de interfaces de usuario utilizando componentes,
                  hooks, librerías como React Router y React Hook Form. También,
                  trabajé con Next.js y TypeScript. Esta etapa fue muy
                  enriquecedora, ya que me proporcionó habilidades para
                  desarrollar webs complejas y escalables.
                </span>
                <div className="flex gap-4">
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={reactIco} className="w-8 " alt="React" />
                  </div>
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={nextIco} className="w-8 " alt="Next" />
                  </div>
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img
                      src={typescriptIco}
                      className="w-8 "
                      alt="TypeScript"
                    />
                  </div>
                </div>
              </div>
              <div className="h-full rounded-lg border border-t-8 border-t-blue-500 flex flex-col justify-between items-center p-3 cursor-pointer hover:scale-105 duration-500">
                <span className="font-bold text-lg ">BACKEND</span>
                <span>En proceso</span>
                <div className="flex gap-2">
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={expressIco} className="w-8 " alt="Git" />
                  </div>
                  <div className="border border-blue-400 rounded-full p-2 grayscale hover:grayscale-0">
                    <img src={mongoIco} className="w-8 " alt="Github" />
                  </div>
                </div>
              </div>
              <div className="h-full flex flex-col justify-center items-center">
                <img src={ilustration} alt="Cerebro" className="w-72 mt-4 " />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
