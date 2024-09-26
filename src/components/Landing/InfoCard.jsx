import { MdOutlineLaptopMac } from 'react-icons/md';
import { HiRocketLaunch } from 'react-icons/hi2';
import { GrServices } from 'react-icons/gr';
import { TbArrowsCross } from 'react-icons/tb';
import { GoArrowRight } from "react-icons/go";
export const CARDDATA = [
    {
        title: "YourGPT Chatbot",
        icon: MdOutlineLaptopMac,
        description: "YourGPT Chatbot a No-Code AI Chatbot builder for 24/7 customer support.",
        link: "/chatbot/introduction",
        linkText: "Get started ",
        iconColor: "dark:text-[#eebd53] text-gray-800/90",
        target:"_self"
      },
      {
        title: "LLM Spark",
        icon: HiRocketLaunch,
        description: "LLM Spark a development platform for effortlessly building LLM applications.",
        link: "/llm-spark/introduction",
        linkText: "Explore ",
        iconColor: "dark:text-[#bd53ee] text-gray-800/90",
        target: "_self"
      },
      {
        title: "Service Status",
        icon: GrServices,
        description: "Stay updated on the latest status of our services to make informed decisions.",
        link: "https://status.yourgpt.ai/",
        linkText: "Check status",
        iconColor: "dark:text-[#84ee53] text-gray-800/90",
        target:"_blank"
      },
    //   {
    //     title: "GDPR Compliance",
    //     icon: TbArrowsCross,
    //     description: "Learn about our GDPR compliance details.",
    //     link: "https://docs.yourgpt.ai/gdpr",
    //     linkText: "Learn about",
    //     iconColor: "dark:text-[#ee5389] text-white",
    //     bgPattern: "",
    //     className: "p-8 border dark:border-gray-700 border-gray-200 rounded-lg shadow !mt-0 h-[228px] lg:h-[180px] dark:hover:border-blue-400 hover:border-gray-400 transition-colors duration-500"
    //   }
  ];

// Reusable Card Component
export const InfoCard = ({ title, icon: Icon, description, link, linkText, iconColor, bgPattern,target }) => (
    <a href={link} target={target}  className=" group flex flex-col justify-between border dark:border-gray-700 border-gray-200 rounded-2xl dark:hover:rounded-2xl hover:rounded-2xl shadow !mt-0 h-[430px] dark:hover:border-blue-500/30 hover:border-gray-300 transition-colors duration-500 max-w-[361px] dark:hover:bg-blue-500/10 hover:bg-gray-50 no-underline">
    <div className={`flex justify-center items-center min-h-[190px] dark:bg-[url('/assets/card-bg.svg')] bg-center bg-no-repeat bg-black/[0.08] rounded-xl dark:rounded-2xl rounded-br-none rounded-bl-none dark:rounded-br-none dark:rounded-bl-none`}>
        <span className="p-2 pl-0">
            <Icon className={`text-6xl ${iconColor}`} />
        </span>
    </div>
    <div className='p-6'>
        <div className="text-2xl font-semibold flex items-center tracking-tight text-gray-800/90 dark:!text-white/95 ">
            {title}
        </div>
        <p className='mb-2 text-gray-800/90 dark:!text-white/95  tracking-tight'>
            {description}
        </p>
        <div className="text-blue-500 font-semibold transition-all duration-300 flex items-center gap-1 ">
            {linkText}
            <GoArrowRight className='group-hover:translate-x-1 transition-all duration-300' />
        </div>
    </div>
</a>


);

