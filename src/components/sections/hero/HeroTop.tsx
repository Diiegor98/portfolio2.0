import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypingAnimation from "@/components/magicui/typing-animation";
import BlurFade from "@/components/magicui/blur-fade";

export default function HeroTop() {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <Avatar className="h-20 w-20 md:h-24 md:w-24">
          <AvatarImage src="/placeholder-user.jpg" alt="Diego Rodríguez" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
      </BlurFade>
      <div className="space-y-2">
        <BlurFade delay={0.5} inView>
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl ">
            Diego Rodríguez
          </h1>
        </BlurFade>
        <BlurFade delay={0.75} inView>
          <TypingAnimation
            className="max-w-[500px] text-xl "
            text="Front End Developer"
          />
        </BlurFade>
      </div>
    </>
  );
}
