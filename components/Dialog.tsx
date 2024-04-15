import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Projects } from "@/typings";
import { urlFor } from "@/lib/sanity/client";

type Props = {
  project: Projects;
};
function DialogComponent({ project }: Props) {
  const {
    _id,
    projectName,
    slug,
    description,
    techStack,
    image: { asset },
    github,
    website,
  } = project;

  const technologies = techStack.map((tech) => tech.technology);

  return (
    <Dialog>
      <DialogTrigger className=" flex flex-col p-6 flex-shrink-0 h-1/4 md:h-1/3 w-[300px] md:w-[600px] xl:w-[700px] snap-center duration-700 border rounded-xl hover:bg-zinc-800/10 md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
        <h4 className="text-2xl lg:text-4xl font-semibold tracking-tighter">
          {projectName}
        </h4>
        <p className="text-xs md:text-sm">{slug}</p>
      </DialogTrigger>
      <DialogContent className=" p-10 flex flex-col items-center justify-center bg-zinc-950/10 bg-gradient-to-tl from-black via-zinc-600/20 to-black border-zinc-600 text-white">
        <div className="space-y-4">
          <header className="font-semibold tracking-tighter text-2xl text-center">
            <h4>{projectName}</h4>
            <span className="text-xs text-white/50 font-light">
              {technologies.join(" / ")}
            </span>
          </header>
          <section className="space-y-2 flex flex-col items-center">
            <Image
              src={urlFor(asset._ref).width(500).height(300).url()}
              width={500}
              height={500}
              alt="projects"
              className="object-contain rounded-lg shadow-lg"
            />
            <p className="text-sm text-center w-full">{description}</p>
          </section>
          <footer className="space-x-20 flex justify-center font-semibold tracking-tighter text-xs md:text-sm">
            {github !== null ? (
              <Link href={github} className="flex items-center space-x-2 ">
                <span>GitHub</span> <ArrowLongRightIcon className="h-5 w-5" />
              </Link>
            ) : null}
            {website !== null ? (
              <Link href={website} className="flex items-center space-x-2">
                <span>Website</span> <ArrowLongRightIcon className="h-5 w-5" />
              </Link>
            ) : null}
          </footer>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogComponent;
