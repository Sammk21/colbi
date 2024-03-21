"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

export const PageWrapper = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0, animationDuration: 0.5 }}
    exit={{ opacity: 0, y: 30 }}
    className={classNames("min-h-screenHeightWithoutHeader", className)}
  >
    {children}
  </motion.div>
);
