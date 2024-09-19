import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypingAnimation from "@/components/magicui/typing-animation";
import BlurFade from "@/components/magicui/blur-fade";
import photoProfile from "./../../../assets/profilePhoto.jpeg"

export default function HeroTop() {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <Avatar className="size-44 sm:size-48 border-2 sm:border-4 border-black dark:border-white">
          <AvatarImage src={photoProfile} alt="Diego Rodríguez" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
      </BlurFade>
      <div className="space-y-2">
        <BlurFade delay={0.5} inView>
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl ">
            Diego Rodríguez
          </h1>
        </BlurFade>
        <BlurFade delay={0.75} inView>
          <TypingAnimation
            className="max-w-[500px] text-xl text-blue-600"
            text="Front End Developer"
          />
        </BlurFade>
      </div>
    </>
  );
}
