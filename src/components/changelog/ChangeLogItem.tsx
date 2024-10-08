import React from "react";
import { marked } from "marked";
import './../../styles/changelogitem.css'
interface ChangelogItemProps {
  version: string;
  date: string;
  data: string;
  img: string;
}

export default function ChangelogItem({ version, date, data,img }: ChangelogItemProps): React.ReactElement {
  const htmlContent = marked.parse(data);
  return (
    <div className="changelog-item flex flex-col md:flex-row justify-between gap-4 md:gap-8 ">
      

      <div className="flex lg:justify-center  gap-2">
        <p className="whitespace-nowrap font-bold text-2xl dark:text-gray-300  !mt-0 !sticky top-[5rem] h-fit tracking-tight dark:py-1 dark:px-3  rounded-lg dark:bg-black">{date}</p>

        <div className=" hidden md:block mt-1">
          <div className="relative flex justify-center items-center">
          <div className="size-5 p-2 bg-gray-700 rounded-full dark:opacity-50 "></div>
          <div className="size-2 dark:bg-gray-200 bg-white rounded-full !mt-0 absolute dark:animate-ping"></div>

          </div>
        
        <div className="!mt-1 ml-[9px] min-h-full border border-r-0 border-y-0 border-gray-700  "></div>

        </div>
       
         
        </div>
        <div className="!mt-0 max-w-screen-lg mx-auto">
        {/* <img src={img} alt={`Changelog image for version ${version}`} className="mb-4 w-[720px] rounded-lg aspect-[380/139] " /> */}
       <div className=" changelog-item__content dark:text-white text-gray-700  "  dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      
    </div>
  );
}
