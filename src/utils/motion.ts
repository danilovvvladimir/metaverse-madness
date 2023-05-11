export const navVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    transition: {
      type: "tween",
      stiffness: 300,
      damping: 140,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      stiffness: 80,
      // delay: 0.2,
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.25,
      delay,
    },
  },
});

// interface ContainerVariants {
//   hidden: {};
//   visible: {
//     transition: {
//       staggerChildren: number;
//       delayChildren: number;
//     };
//   };
// }

export const staggerContainer = (staggerChildren: any, delayChildren: any) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const typingText = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const typingTextContainer = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};
