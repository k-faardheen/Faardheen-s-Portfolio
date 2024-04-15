import React from "react";
import DialogComponent from "./Dialog";
import { Projects as ProjectsType } from "@/typings";

type Props = {
  projects: ProjectsType[];
};

async function Projects({ projects }: Props) {
  return (
    <div className="h-screen space-y-28 relative snap-center flex flex-col items-center justify-center">
      <h1 className="text-4xl absolute top-10 font-semibold text-center tracking-tighter lg:text-5xl">
        Projects
      </h1>
      <div className="w-full h-full flex items-center space-x-5 p-10 overflow-x-scroll snap-x snap-mandatory">
        {projects.map((project) => (
          <DialogComponent key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
