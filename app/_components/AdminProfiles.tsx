"use client";
import React, { useEffect, useRef } from "react";
import CardProfile from "./Card";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AdminProfiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some", once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="flex justify-evenly h-[60dvh] items-center">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.78, delay: 0.25 }}
      >
        <CardProfile
          alt="admin-profile"
          src="/eto na talga.jpg"
          name="Alfajer S. Idjas"
          description="lorem ipsum"
          field="Full-stack Web Developer"
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -90 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.78, delay: 0.25 }}
      >
        <CardProfile
          alt="admin-profile"
          src="/206f74a2-4e90-44bd-b415-81cb6c327523.jfif"
          name="Almajid S. Idjas"
          field="Senior Structural Civil Engineer"
          description="lorem ipsum"
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.78, delay: 0.25 }}
      >
        <CardProfile
          alt="admin-profile"
          src="/eto na talga.jpg"
          name="Radzmel S. Idjas"
          field="Architect"
          description="lorem ipsum"
        />
      </motion.div>
    </div>
  );
}
