import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { fetchAbout } from "@/lib/fetchAbout";
import { fetchProjects } from "@/lib/fetchProjects";
import { About as AboutType, Projects as ProjectsType } from "@/typings";

export const revalidate = 10;

export default async function Home() {
  const about: AboutType[] = await fetchAbout();
  const projects: ProjectsType[] = await fetchProjects();

  return (
    <main className="h-screen bg-zinc-950 bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white z-0 snap-mandatory snap-y overflow-scroll">
      <Background />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About about={about} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </main>
  );
}
