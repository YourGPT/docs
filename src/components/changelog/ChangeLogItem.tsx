import React from "react";
import { marked } from "marked";
import './../../styles/changelogitem.css'
import { motion, useScroll, useTransform } from "framer-motion";
interface ChangelogItemProps {
  version: string;
  date: string;
  data: string;
  img: string;
}

export default function ChangelogItem({ version, date, data,img }: ChangelogItemProps): React.ReactElement {
  const LineRef = React.useRef<HTMLDivElement>(null);
  const DotRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: LineRef, offset: ["0 0.32", "1 0.8"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bg = useTransform(scrollYProgress, [0, 0.08], ["#ffffff25", "#eef3ef23"]);
  const htmlContent = marked.parse(data);
  return (
    <div ref={LineRef} className="changelog-item flex flex-col lg:flex-row justify-between gap-4 md:gap-8 !mt-0 max-w-6xl mx-auto "> 
      <div  className="flex flex-col lg:flex-row gap-5 lg:gap-0 !mt-0 !w-[28%]">
           <div className=" flex gap-2 ">
        

        <div  className=" hidden lg:block  ">
          <div ref={DotRef} className="hidden md:flex flex-col items-center h-full">
        <motion.div   className="h-5 aspect-square relative z-[1] flex justify-center items-center rounded-full border dark:border-white/10 border-[#755fff]/20 dark:bg-white/10 bg-gray-100 shadow-xl ">
          <div className="size-2 dark:bg-[#adaaaada] bg-[#755fff]  rounded-full"></div>
        </motion.div>
        <div className="w-[2px] flex-1 relative h-full !mt-0">
          <div className="w-full h-full dark:bg-white/10 bg-gray-200 !mt-0" />
          <motion.div style={{ height }} className="w-full h-0 absolute top-0 left-0 bg-gradient-to-tr from-[#755fff]/60 via-red-800/20 to-red-500/10  !mt-0" />
        </div>
      </div>
        

        </div>
        <p className="whitespace-nowrap font-bold  text-3xl dark:text-white text-gray-700  !mt-[-7px] !sticky top-[5rem] h-fit tracking-tight  rounded-lg ">
          {date}
        </p>

      </div>
          </div>   
        
       <div className=" changelog-item__content dark:text-white text-gray-700 flex-1 !mt-0 border border-gray-700 rounded-2xl p-6  mb-6 !w-full "  dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      
   
  );
}
