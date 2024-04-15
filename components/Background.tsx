"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { particleConfig } from "@/lib/particle-config";
import { loadSlim } from "@tsparticles/slim";

function Background() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return <Particles options={particleConfig}></Particles>;
}

export default Background;
