// const particlesConfig = {
//   particles: {
//     number: {
//       value: 40,
//       density: {
//         enable: true,
//         value_area: 600,
//       },
//     },
//     color: {
//       value: "#ffffff",
//     },
//     shape: {
//       type: "circle",
//       stroke: {
//         width: 0,
//         color: "#000000",
//       },
//       polygon: {
//         nb_sides: 3,
//       },
//       image: {
//         src: "",
//         width: 100,
//         height: 100,
//       },
//     },
//     opacity: {
//       value: 0.6,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 0.1,
//         opacity_min: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 3.16725702807898,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 30,
//         size_min: 0.1,
//         sync: false,
//       },
//     },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 4,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: true,
//         mode: "repulse",
//       },
//       onclick: {
//         enable: false,
//         mode: "repulse",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       bubble: {
//         distance: 400,
//         size: 30,
//         duration: 2,
//         opacity: 6,
//         speed: 3,
//       },
//       repulse: {
//         distance: 130,
//         duration: 0.6,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
//   retina_detect: true,
// };

// export default particlesConfig;



const particlesConfig = {
  particles: {
    fullScreen: {
      enable: true,
      zIndex: 1,
  },
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 600,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle", // You can also use 'edge' or 'polygon' if needed
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
    opacity: {
      value: 0.6,
      random: false,
      animation: {
        enable: false,
        speed: 0.1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3.167,
      random: true,
      animation: {
        enable: false,
        speed: 30,
        minimumValue: 0.1,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
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
  },
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
  retina_detect: true,
};

export default particlesConfig;

