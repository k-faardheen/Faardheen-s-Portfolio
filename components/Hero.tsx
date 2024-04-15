"use client";
import { Mochiy_Pop_One } from "next/font/google";

import { easeIn, motion } from "framer-motion";
import { useState } from "react";
import Header from "./Header";

const mochiy = Mochiy_Pop_One({ subsets: ["latin"], weight: ["400"] });

function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [secondAnimationComplete, setSecondAnimationComplete] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center max-w-6xl mx-auto">
      {secondAnimationComplete && (
        <motion.header
          initial={{ x: 0, opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: easeIn, delay: 0.5 }}
        >
          <Header />
        </motion.header>
      )}

      <div
        className={
          mochiy.className &&
          "text-5xl font-bold lg:text-7xl z-20 w-full text-center "
        }
      >
        <motion.div
          className="border border-white relative top-0 -z-10 shadow-white/90 shadow-xl"
          initial={{ x: "100vw" }}
          animate={{ x: 0, opacity: 0 }}
          transition={{ duration: 2, ease: "easeIn" }}
          onAnimationComplete={() => {
            setAnimationComplete(true);
          }}
        ></motion.div>
        {animationComplete && (
          <motion.div
            className="border border-white relative top-0 -z-10 shadow-white/90 shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], y: -120 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={() => {
              setSecondAnimationComplete(true);
            }}
          ></motion.div>
        )}

        {secondAnimationComplete && (
          <motion.span
            className="z-50 "
            initial={{ x: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
          >
            Hi, I&apos;m Faardheen.
          </motion.span>
        )}
        {animationComplete && (
          <motion.div
            className="border border-white relative bottom-0 -z-10 shadow-white/90 shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], y: 120 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          ></motion.div>
        )}
        <motion.div
          className="border border-white relative bottom-0 -z-10 shadow-white/90 shadow-xl"
          initial={{ x: "-100vw" }}
          animate={{ x: 0, opacity: 0 }}
          transition={{ duration: 2, ease: "easeIn" }}
        ></motion.div>
      </div>
      {secondAnimationComplete && (
        <motion.p
          className="text-sm font-light text-center flex justify-center p-4"
          initial={{ x: 0, opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: easeIn, delay: 0.5 }}
        >
          Final year university student, tech enthusiast, I build stuffs for
          fun.{" "}
        </motion.p>
      )}
    </div>
  );
}

export default Hero;
