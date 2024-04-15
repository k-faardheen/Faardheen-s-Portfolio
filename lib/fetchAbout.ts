import { About } from "@/typings";
import { BASE_URL } from "./url";
import { groq } from "next-sanity";
import { client } from "./sanity/client";

export const fetchAbout = async () => {
  const query = groq`*[_type == "about"]| order(_createdAt asc){
  text
}`;
  const about: About[] = await client.fetch(query);

  return about;
};
