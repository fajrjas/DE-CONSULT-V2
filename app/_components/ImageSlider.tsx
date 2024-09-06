"use client";
import { motion } from "framer-motion";
// import Image from "next/image"; // Import Next.js Image component
import { Image } from "@nextui-org/react";

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 0.7,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};

export default function LogoImage() {
  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: "450px", // Adjust the size as needed
        height: "450px",
        position: "relative", // Required for Next.js <Image />
      }}
      className=" hidden md:block"
    >
      <Image
        src="/DE_CONSULT_LOGO-Photoroom.png" // Path to the image in the public folder
        alt="DE Consult Logo"
        // layout="fill" // Ensures the image fills the container
        // objectFit="contain" // Ensures the image maintains its aspect ratio
      />
    </motion.div>
  );
}
