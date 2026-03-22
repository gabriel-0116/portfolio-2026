import { Navbar } from "../components/sections/navbar/page";
import { Hero } from "../components/sections/hero/page";
import { About } from "../components/sections/about/page";
import { TechMarquee } from "../data/TechMarquee";
import { Projects } from "../components/sections/projects/page";
import { Journey } from "../components/sections/journey/page";
import { Contact } from "../components/sections/contact/page";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-black text-white">
      <Navbar />
      <Hero />
      <About />
        <div className="-mt-6 md:-mt-10 lg:-mt-12">
        <TechMarquee />
      </div>
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
}
