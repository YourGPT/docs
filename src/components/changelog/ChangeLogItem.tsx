import React, { useRef, useMemo } from "react";
import { marked } from "marked";
import "./../../styles/changelogitem.css";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";

interface ChangelogItemProps {
  version: string;
  date: string;
  data: string;
  img: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ChangeLogItem({ version, date, data, img, isFirst = false, isLast = false }: ChangelogItemProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // For the last item, extend the scroll range so it can complete its animation
    offset: isLast ? ["start 20%", "end -20%"] : ["start 20%", "end 40%"]
  });

  // Create custom motion values for the last item
  const customHeight = useMotionValue("0%");
  const springHeight = useSpring(customHeight, { stiffness: 100, damping: 30 });

  const height = isLast ? springHeight : useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);
  const dateSpacing = useTransform(scrollYProgress,
    [0, 0.2, 0.9, 1],
    ["0px", "24px", "24px", "0px"]
  );

  const [isGlowing, setIsGlowing] = React.useState(false);
  const [isLineVisible, setIsLineVisible] = React.useState(false);

  React.useEffect(() => {
    const unsubscribeScrollProgress = scrollYProgress.on("change", (latest) => {
      setIsLineVisible(latest > 0);
    });

    // For the first item, glow immediately when in view
    if (isFirst) {
      setIsGlowing(isInView);
      return () => {
        unsubscribeScrollProgress();
      };
    }

    // For the last item, use a different approach
    if (isLast) {
      // Use intersection observer to detect when the last item is visible
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            // When last item is visible, start the glow and animate the line
            setIsGlowing(true);
            // Animate the custom height to 100%
            customHeight.set("100%");
          }
        },
        { threshold: [0.1, 0.3, 0.5] }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      // Also listen to scroll progress for backup
      const unsubscribeScrollProgress2 = scrollYProgress.on("change", (latest) => {
        if (latest > 0.1) {
          setIsGlowing(true);
          customHeight.set("100%");
        }
      });

      return () => {
        unsubscribeScrollProgress();
        unsubscribeScrollProgress2();
        observer.disconnect();
      };
    }

    // For other items, track the height transform to trigger glow when line reaches the dot
    const unsubscribeHeight = height.on("change", (currentHeight: any) => {
      // Parse the percentage value (e.g., "25%" -> 25)
      const heightPercent = parseFloat(String(currentHeight).replace('%', ''));
      // For middle items, glow when line reaches around 10% height (when it touches the dot)
      // and keep glowing while the line is progressing
      setIsGlowing(heightPercent >= 8 && heightPercent <= 95);
    });

    return () => {
      unsubscribeScrollProgress();
      unsubscribeHeight();
    };
  }, [scrollYProgress, height, isFirst, isLast, isInView, customHeight]);

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
            className="whitespace-nowrap font-bold text-3xl text-gray-700 dark:text-gray-200 !mt-[-7px] !sticky top-[5rem] h-fit tracking-tight rounded-lg min-w-[240px] text-right pt-3 changelog-date-accent changelog-date-text"
          >
            {date}
          </motion.p>

          <div className="hidden lg:block">
            <div ref={dotRef} className="hidden md:flex flex-col items-center h-full" role="presentation">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0 }}
                transition={{ delay: 0.2 }}
                className={`h-5 aspect-square relative z-[1] flex justify-center items-center rounded-full border border-brand-accent/30 bg-white dark:bg-gray-800 shadow-xl changelog-timeline-dot ${isGlowing ? 'checkpoint-glow' : ''}`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isInView ? 1 : 0 }}
                  transition={{ delay: 0.3 }}
                  className="size-2 bg-brand-accent rounded-full"
                />
              </motion.div>

              <div ref={lineRef} className="w-[2px] flex-1 relative h-full !mt-0">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 changelog-timeline-line !mt-0" />
                <motion.div
                  style={{
                    height: isLast ? customHeight : height,
                    // For the last item, extend beyond the container
                    ...(isLast && { bottom: "-8rem" })
                  }}
                  className={`w-full h-0 absolute top-0 left-0 bg-gradient-to-b from-brand-accent to-brand-accent/60 !mt-0 transition-opacity duration-300 ${isLineVisible ? 'opacity-100' : 'opacity-0'} ${
                    isGlowing ? "shadow-[0_0_10px_rgba(59,130,246,0.5)]" : ""
                  }`}
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
        className="changelog-item__content text-gray-700 dark:text-gray-200 flex-1 !mt-0 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-8 !w-full backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 shadow-changelog-card changelog-content-card"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </motion.div>
  );
}
