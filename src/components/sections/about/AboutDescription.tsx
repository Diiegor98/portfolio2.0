import { Card, CardContent } from "@/components/ui/card";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function AboutDescription() {
  return (
    <Card className="max-w-[600px] leading-6 border-none">
      <CardContent className="text-lg p-3">
        <RoughNotationGroup show={true} >
          Me apasiona la{" "}
          <RoughNotation type="underline" show={true} color="DeepSkyBlue" order="1">
            <b>creatividad</b>
          </RoughNotation>{" "}
          en el diseño de interfaces de usuario. Estoy constantemente buscando
          nuevas oportunidades de{" "}
          <RoughNotation type="underline" show={true} color="DeepSkyBlue" order="3">
            <b>aprendizaje</b>
          </RoughNotation>{" "}
          y colaboración con otros profesionales del desarrollo web. Mi objetivo
          es adquirir{" "}
          <RoughNotation type="underline" show={true} color="DeepSkyBlue" order="2">
            <b>experiencia</b>
          </RoughNotation>{" "}
          en un entorno profesional y contribuir al desarrollo de soluciones web
          efectivas y atractivas.
        </RoughNotationGroup>
      </CardContent>
    </Card>
  );
}

export default AboutDescription;
