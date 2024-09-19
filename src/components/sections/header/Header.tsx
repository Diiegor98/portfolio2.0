//Components
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

//Toggle dark mode
import { ModeToggle } from "@/components/mode-toggle";

//Icons
import { MenuIcon } from "lucide-react";
import { House } from "lucide-react";
import { User } from "lucide-react";
import { BookText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Mail } from "lucide-react";

//Hooks
import { useState, useEffect } from "react";

function Header() {

  //Estado para manejar la visibilidad de la NavBar
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Si el usuario está desplazándose hacia abajo y ha pasado una distancia mínima (100px), oculta la navbar.
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Si el usuario está desplazándose hacia arriba, muestra la navbar.
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (

    <div
      className={`fixed bg-background top-0 left-0 w-full z-50 flex items-center transition-transform duration-300 justify-between px-4 py-2 md:px-8 md:py-4 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="hidden md:flex gap-1">
        <a
          href="#top"
          className="text-lg font-medium hover:underline underline-offset-4"
        >
          <Button variant="ghost">
            <House className="mr-1" />
            Inicio
          </Button>
        </a>
        <a
          href="#about"
          className="text-lg font-medium hover:underline underline-offset-4"
        >
          <Button variant="ghost">
            <User className="mr-1" />
            Sobre mí
          </Button>
        </a>
        <a
          href="#studies"
          className="text-lg font-medium hover:underline underline-offset-4"
        >
          <Button variant="ghost">
            <BookText className="mr-1" />
            Estudios
          </Button>
        </a>
        <a
          href="#projects"
          className="text-lg font-medium hover:underline underline-offset-4"
        >
          <Button variant="ghost">
            <BriefcaseBusiness className="mr-1" />
            Proyectos
          </Button>
        </a>
        <a
          href="#contact"
          className="text-lg font-medium hover:underline underline-offset-4"
        >
          <Button variant="ghost">
            <Mail className="mr-1" />
            Contacto
          </Button>
        </a>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden bg-transparent"
          >
            <MenuIcon className="h-6 w-6" />
            <SheetTitle className="sr-only">Toggle navigation menu </SheetTitle>
            <SheetDescription className="sr-only">
              Responsive navigation menu
            </SheetDescription>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid w-[200px] p-4">
            <a
              href="#top"
              className="text-lg font-medium hover:underline underline-offset-4"
            >
              <Button variant="ghost">
                <House className="mr-1" />
                Inicio
              </Button>
            </a>
            <a
              href="#about"
              className="text-lg font-medium hover:underline underline-offset-4"
            >
              <Button variant="ghost">
                <User className="mr-1" />
                Sobre mí
              </Button>
            </a>
            <a
              href="#studies"
              className="text-lg font-medium hover:underline underline-offset-4"
            >
              <Button variant="ghost">
                <BookText className="mr-1" />
                Estudios
              </Button>
            </a>
            <a
              href="#proyects"
              className="text-lg font-medium hover:underline underline-offset-4"
            >
              <Button variant="ghost">
                <BriefcaseBusiness className="mr-1" />
                Proyectos
              </Button>
            </a>
            <a
              href="#contact"
              className="text-lg font-medium hover:underline underline-offset-4"
            >
              <Button variant="ghost">
                <Mail className="mr-1" />
                Contacto
              </Button>
            </a>
          </div>
        </SheetContent>
      </Sheet>
      <ModeToggle />
    </div>
  );
}

export default Header;
