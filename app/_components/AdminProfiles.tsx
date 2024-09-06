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
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="flex justify-evenly h-[60dvh] items-center">
      <motion.div
        variants={{
          hidden: { x: 180 },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.2, delay: 0.8 }}
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
          hidden: { scale: 1.33, zIndex: 3 },
          visible: { scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.25 }}
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
          hidden: { x: -180 },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.2, delay: 0.8 }}
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
