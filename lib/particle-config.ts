import { type ISourceOptions } from "@tsparticles/engine";

export const particleConfig: ISourceOptions = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 1,
      },
      repulse: {
        distance: 6,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    move: {
      enable: true,
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 60,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 0.5, max: 1.5 },
    },
  },
  detectRetina: true,
};
