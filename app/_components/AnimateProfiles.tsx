"use client";

import React, { PropsWithChildren, ReactNode, useRef } from "react";
import { motion } from "framer-motion";

type props = {
  children: ReactNode;
};

export default function AnimateProfiles({ children }: props) {
  const ref = useRef(null);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
