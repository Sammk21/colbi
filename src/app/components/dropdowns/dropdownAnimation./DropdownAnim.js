const transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] };
export const ItemsSlide = {
  initial: { y: 80 },

  enter: (i) => ({
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),

  exit: (i) => ({
    y: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const DropdownSlide = {
  initial: { height: 0 },
  enter: {
    transition,
    height: 150,
  },
  exit: {
    height: 0,
    transition,
  },
};
