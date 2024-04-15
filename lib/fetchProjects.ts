import { Projects } from "@/typings";
import { BASE_URL } from "./url";
import { groq } from "next-sanity";
import { client } from "./sanity/client";

export const fetchProjects = async () => {
  const query = groq`*[_type == "projects"] {
  _id, 
  projectName, 
  techStack[]-> { technology }, 
  image{ asset { _ref }}, 
  slug, 
  description, 
  github, 
  website
}`;
  const projects: Projects[] = await client.fetch(query);

  return projects;
};
