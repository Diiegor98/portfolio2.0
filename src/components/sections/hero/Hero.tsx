//Componentes
import { Separator } from "@/components/ui/separator";
import HeroSocial from "./HeroSocial";
import HeroTop from "./HeroTop";


function Hero() {
  return (
    <section className="w-full py-32 shadow-md">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center ">
          <HeroTop />
          <Separator />
          <HeroSocial />
        </div>
      </div>
    </section>
  );
}

export default Hero;
