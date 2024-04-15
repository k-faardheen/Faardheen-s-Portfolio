export interface Technology {
  technology: string;
}

export interface Projects {
  _id: string;
  slug: string;
  description: string;
  github: string;
  website: string;
  projectName: string;
  techStack: Technology[];
  image: { asset: { _ref: string } };
}

export interface About {
  text: string[];
}
