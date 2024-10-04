import React from "react";
import { marked } from "marked";
import './../../styles/changelogitem.css'
interface ChangelogItemProps {
  version: string;
  date: string;
  data: string;
}

export default function ChangelogItem({ version, date, data }: ChangelogItemProps): React.ReactElement {
  const htmlContent = marked.parse(data);
  return (
    <div className="changelog-item flex flex-col md:flex-row justify-between gap-8 lg:gap-0">
      

      <div className="flex lg:justify-center  gap-2 ">
        <div className=" hidden md:block mt-2 lg:mt-3">
          <div className="relative flex justify-center items-center">
          <div className="size-5 p-2 dark:bg-gray-700 bg-black rounded-full dark:opacity-50 "></div>
          <div className="size-2 dark:bg-gray-200 bg-white rounded-full !mt-0 absolute dark:animate-ping"></div>

          </div>
        
        <div className="!mt-1 ml-[9px] min-h-full border border-r-0 border-y-0 border-gray-700  "></div>

        </div>
       
          <p className="whitespace-nowrap font-bold text-3xl dark:text-white text-gray-700 !mt-0 tracking-tighter !sticky top-[4rem] h-fit">{date}</p>
        </div>
      <div className=" changelog-item__content !mt-0 max-w-screen-sm mx-auto"  dangerouslySetInnerHTML={{ __html: htmlContent }} />
      {/* {console.log(htmlContent)} */}
    </div>
  );
}
