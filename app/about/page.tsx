"use client";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <motion.div
      className="text-center mt-10"
      variants={{
        hidden: { opacity: 0, y: 56 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-2xl">
        Boss? Boss! Kumusta ang buhay buhay? Di pa tapos to kupal ka ba?
      </h1>
    </motion.div>
  );
}
