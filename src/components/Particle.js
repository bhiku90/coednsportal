import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";
export default function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
                detectsOn: "canvas",
                events: {
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onClick: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    links: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 30,
                    duration: 2,
                    opacity: 6,
                    speed: 3,
                  },
                  repulse: {
                    distance: 130,
                    duration: 0.6,
                  },
                  push: {
                    quantity: 4,
                  },
                  remove: {
                    quantity: 2,
                  },
                },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "out",
                },
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 600,
                },
                value: 160,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 3,
                  },
                  image: {
                    src: "",
                    width: 100,
                    height: 100,
                  },
              },
              size: {
                value: 2.167,
                random: true,
                animation: {
                       enable: false,
                       speed: 30,
                       minimumValue: 0.1,
                       sync: false,
                           },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}