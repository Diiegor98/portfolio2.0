import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import weatherMock from "../../../assets/proyectos/691shots_so.png";
import ecommerceMock from "../../../assets/proyectos/259shots_so.png";

function Proyects() {
  return (
    <div
      id="projects"
      className="px-4 py-8 sm:px-4 flex justify-center shadow-md"
    >
      <div className="max-w-[960px] w-full ">
        <BlurFade delay={0.25} inView>
          <h4 className="mb-2 font-bold text-blue-600">¿Que realicé?</h4>{" "}
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <h3 className="text-5xl mb-1 font-extrabold">PROYECTOS</h3>
          <div className="m-0 h-1 w-40 bg-blue-600 mb-8"></div>
        </BlurFade>
        <BlurFade delay={0.75} inView>
          <div className="w-100 justify-center flex flex-wrap gap-4">
            <Card className="max-w-[320px]">
              <CardHeader>
                <img src={weatherMock} alt="Mock Up Weather" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold">Weather App</CardTitle>
                <CardDescription>
                  App del clima que obtiene datos de una API y utiliza Bootstrap
                  para los estilos. Muestra el clima actual de cualquier ciudad
                  con un diseño sencillo y responsive.
                </CardDescription>
                <CardFooter className="flex flex-col p-0 mt-2">
                  <div className="flex p-2 justify-center gap-2 ">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Bootstrap</Badge>
                    <Badge variant="outline">API</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-2 gap-4">
                    <Button className="bg-blue-500">
                      <a
                        href="https://github.com/Diiegor98/weather-app"
                        target="_blank"
                      >
                        Repositorio
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </CardContent>
            </Card>
            <Card className="max-w-[320px]">
              <CardHeader>
                <img src={ecommerceMock} alt="E-commerce Mock Up" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold">E-commerce</CardTitle>
                <CardDescription>
                  Ecommerce que utiliza Firebase para gestionar la base de
                  datos, React para la lógica del frontend y Tailwind CSS para
                  los estilos. La tienda es responsive y tiene una interfaz
                  sencilla y funcional.
                </CardDescription>
                <CardFooter className="flex flex-col p-0 mt-2">
                  <div className="flex p-2 justify-center gap-2 flex-wrap ">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Tailwind</Badge>
                    <Badge variant="outline">Firebase</Badge>
                    <Badge variant="outline">Hookform</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-2 gap-4">
                    <Button className="bg-blue-500">
                      <a
                        href="https://github.com/Diiegor98/ecommerce-react-firebase"
                        target="_blank"
                      >
                        Repositorio
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </BlurFade>
        <BlurFade delay={0.85} inView>
          <div className="w-100 flex justify-center mt-8">
            <Button className="bg-blue-500">
              <a href="https://github.com/Diiegor98" target="_blank">
                Ver más proyectos
              </a>
            </Button>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}

export default Proyects;
