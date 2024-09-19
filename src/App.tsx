import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/sections/header/Header";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Studies from "./components/sections/studies/Studies";
import Proyects from "./components/sections/proyects/Proyects";
import Contact from "./components/sections/contact/Contact";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Hero />
        <About />
        <Studies />
        <Proyects />
        <Contact />
    </ThemeProvider>
  );
}

export default App;
