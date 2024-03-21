export const textAnimation = {
  initial: { y: "100%" },

  enter: (i) => ({
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.075 * i,
    },
  }),
  exit: (i) => ({
    y: "-100%",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.075 * i,
    },
  }),
};
