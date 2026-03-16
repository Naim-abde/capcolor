'use client'

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  // 1. Solution dyal l-Hydration: n-tsennaw l-component t-mounta f l-client
  const [mounted, setMounted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true); // 2. Force rendering ghir f l-client side

    if (typeof window !== "undefined") {
      const navigation = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;

      if (navigation?.type === "reload" || navigation?.type === "navigate") {
        setHasAnimated(false);
      } else {
        setHasAnimated(true);
      }
    }
  }, []);

  // Scroll Transforms
  const videoScale = useTransform(scrollY, [0, 500], [0.9, 1], {
    ease: easeOut,
  });
  const videoWidth = useTransform(scrollY, [0, 500], ["85%", "100%"], {
    ease: easeOut,
  });
  const videoBorderRadius = useTransform(scrollY, [0, 500], [32, 0], {
    ease: easeOut,
  });

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0, 1],
        delay: 0.6,
      },
    },
  };

  const videoContainerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 1.2,
        ease: [0.25, 0.1, 0, 1],
      },
    },
  };

  // 3. Ila baki l-page f l-server, rj3 khawi bach n-avoidiw mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-white" />; 
  }

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-full flex justify-center items-center md:px-0 pt-32 md:pt-40 bg-white"
        initial={hasAnimated ? "visible" : "hidden"}
        animate="visible"
        variants={contentVariants}
      >
        <div className="md:max-w-3xl text-center px-4">
          <motion.h1
            variants={contentVariants}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            <motion.span className="inline-block" variants={contentVariants}>
              Propulser les entreprises
            </motion.span>
            <br />
            <motion.span className="inline-block" variants={contentVariants}>
              par l&apos;impression 
            </motion.span>
          </motion.h1>

          <motion.p
            variants={contentVariants}
            className="text-xl text-[#7b7b7b] mb-8"
          >
            Chez CapColor vos projets
            <br />
             prennent vie avec passion
          </motion.p>

          <motion.div
            variants={buttonVariants}
            initial={hasAnimated ? "visible" : "hidden"}
            animate="visible"
            className="flex gap-x-3 md:gap-x-6 justify-center mb-10"
          >
            <Link
              href={"/projects"}
              className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-full text-lg font-medium transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Projets
            </Link>

            <motion.a
              href="https://meetings.hubspot.com/productizedos/epic-labs?uuid=fca92f30-4111-4445-9498-af335bb840af"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 text-white px-6 md:px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-600 transition-all hover:shadow-xl inline-block"
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center w-full md:px-0"
        initial={hasAnimated ? "visible" : "hidden"}
        animate="visible"
        variants={videoContainerVariants}
      >
        <motion.div
          style={{
            width: videoWidth,
            scale: videoScale,
            borderRadius: videoBorderRadius,
            overflow: "hidden",
          }}
          className="relative w-full md:w-auto"
        >
          <video
            src="/vedi.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;