import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { TabletSmartphone, Users, BookOpenCheck } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

function AboutCards() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
      <BlurFade delay={0.75} inView>
        <Card className="flex flex-col items-center justify-center text-center h-56 sm:w-72 cursor-pointer">
          <TabletSmartphone size={40} color="#2563eb" />
          <CardTitle className="tracking-wide text-xl my-2 font-bold">
            Diseño Responsivo
          </CardTitle>
          <CardContent className="p-2">
            Diseños responsivos adaptables a cualquier dispositivo, brindando una
            experiencia de usuario atractiva.
          </CardContent>
        </Card>{" "}
      </BlurFade>
      <BlurFade delay={1} inView>
        <Card className="flex flex-col items-center justify-center text-center h-56 sm:w-72 cursor-pointer">
          <Users size={40} color="#2563eb" />
          <CardTitle className="tracking-wide text-xl my-2 font-bold">
            Soft Skills
          </CardTitle>
          <CardContent className="p-2">
            Capacidad para trabajar en equipo, rápida adaptación y colaborar de
            manera efectiva con el equipo.
          </CardContent>
        </Card>
      </BlurFade>
      <BlurFade delay={1.25} inView>
        <Card className="flex flex-col items-center justify-center text-center h-56 sm:w-72 cursor-pointer">
          <BookOpenCheck size={40} color="#2563eb" />
          <CardTitle className="tracking-wide text-xl my-2 font-bold">
            Autodidacta
          </CardTitle>
          <CardContent className="p-2">
            Firme aprendizaje continuo, investigo sobre las últimas tendencias
            en diseño y tecnología.
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  );
}

export default AboutCards;
