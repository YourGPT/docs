import React, { useRef, useMemo, useState, useEffect } from "react";
import { marked } from "marked";
import "./../../styles/changelogitem.css";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

interface ChangelogItemProps {
  version: string;
  date: string;
  data: string;
  img: string;
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ChangeLogItem({ version, date, data, img }: ChangelogItemProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 40%"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);
  const dateSpacing = useTransform(scrollYProgress, 
    [0, 0.2, 0.9, 1], 
    ["0px", "24px", "24px", "0px"]
  );
  
  const [isGlowing, setIsGlowing] = React.useState(false);
  const [isLineVisible, setIsLineVisible] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsGlowing(latest >= 0.2 && latest <= 0.9);
      setIsLineVisible(latest > 0);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const htmlContent = useMemo(() => {
    try {
      return marked.parse(data);
    } catch (error) {
      console.error("Error parsing markdown:", error);
      return data; // Fallback to raw data if parsing fails
    }
  }, [data]);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
      className="changelog-item flex flex-col lg:flex-row justify-between gap-4 md:gap-8 !mt-0 max-w-6xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 !mt-0 !w-[28%]">
        <div className="flex gap-2">
          <motion.p 
            style={{ scale, opacity, marginBottom: dateSpacing }}
            className="whitespace-nowrap font-bold text-3xl dark:text-white text-gray-700 !mt-[-7px] !sticky top-[5rem] h-fit tracking-tight rounded-lg min-w-[240px] text-right pt-3"
          >
            {date}
          </motion.p>

          <div className="hidden lg:block">
            <div ref={dotRef} className="hidden md:flex flex-col items-center h-full" role="presentation">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0 }}
                transition={{ delay: 0.2 }}
                className={`h-5 aspect-square relative z-[1] flex justify-center items-center rounded-full border dark:border-white/10 border-[#755fff]/20 dark:bg-white/10 bg-gray-100 shadow-xl ${isGlowing ? 'checkpoint-glow' : ''}`}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: isInView ? 1 : 0 }}
                  transition={{ delay: 0.3 }}
                  className="size-2 dark:bg-[#adaaaada] bg-[#755fff] rounded-full"
                />
              </motion.div>
              
              <div ref={lineRef} className="w-[2px] flex-1 relative h-full !mt-0">
                <div className="w-full h-full dark:bg-white/10 bg-gray-200 !mt-0" />
                <motion.div 
                  style={{ height }}
                  className={`w-full h-0 absolute top-0 left-0 bg-gradient-to-b from-[#755fff] to-[#755fff]/60 !mt-0 transition-opacity duration-300 ${isLineVisible ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="changelog-item__content dark:text-white text-gray-700 flex-1 !mt-0 border border-gray-700/10 dark:border-white/10 rounded-2xl p-6 mb-6 !w-full backdrop-blur-sm dark:bg-white/5 bg-white/50"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </motion.div>
  );
}
