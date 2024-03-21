import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransitionLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div key={pathname}>
        {/* <motion.div
          className="absolute top-0 left-0 h-[100vh] w-full bg-black origin-top z-50"
          initial={{ scaleY: 1, opacity: 0.9 }}
          animate={{ scaleY: 0, opacity: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="absolute top-0 left-0 h-[100vh] w-full bg-black origin-top z-50"
          initial={{ scaleY: 0, opacity: 0.9 }}
          animate={{ scaleY: 0, opacity: 1 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        /> */}
      </motion.div>
      {children}
    </AnimatePresence>
  );
};

export default PageTransitionLayout;
