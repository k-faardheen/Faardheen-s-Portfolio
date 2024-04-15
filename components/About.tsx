"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { About as AboutType } from "@/typings";

type Props = {
  about: AboutType[];
};

function About({ about }: Props) {
  const aboutParagraph = about.map((para) => para.text);

  return (
    <div className="h-screen space-y-28 relative  flex flex-col items-center justify-center">
      <h1 className="text-4xl absolute top-10 font-semibold text-center tracking-tighter lg:text-5xl ">
        About me
      </h1>
      <div className="text-pretty space-y-5 flex flex-col lg:flex-row items-center justify-around mt-2 p-12">
        <motion.div
          id="about__me"
          className="text-sm w-full lg:w-1/2"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <div className="text-pretty text-justify space-y-2">
            {aboutParagraph.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="z-50 flex justify-center lg:justify-end"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <Image
            src="/linked.jpg"
            alt="picture"
            width={400}
            height={400}
            className="w-5/6 h-5/6 md:w-11/12 md:h-11/12 object-contain shadow-lg rounded-lg "
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
