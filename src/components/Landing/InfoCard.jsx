import { MdOutlineLaptopMac } from 'react-icons/md';
import { HiRocketLaunch } from 'react-icons/hi2';
import { GrServices } from 'react-icons/gr';
import { TbArrowsCross } from 'react-icons/tb';
import { MdOutlineHelpCenter } from 'react-icons/md';
import { GoArrowRight } from "react-icons/go";
export const CARDDATA = [
    {
        title: "Docs",
        icon: MdOutlineLaptopMac,
        description: "Find all the technical documentation and product specifications you need.",
        link: "/chatbot/introduction",
        linkText: "Get started ",
        iconColor: "dark:!text-white text-gray-500",
        buttonColor: "text-blue-500 dark:text-blue-400",
        target: "_self"
    },
    {
        title: "Help Center",
        icon: MdOutlineHelpCenter,
        description: "Get answers to your questions and learn how to use YourGPT effectively.",
        link: "https://help.yourgpt.ai/",
        linkText: "Visit Help Center",
        iconColor: "dark:!text-white text-gray-500",
        buttonColor: "text-blue-500 dark:text-green-400",
        target: "_self"
    },
    {
        title: "Changelogs",
        icon: HiRocketLaunch,
        description: "Learn about the latest features, updates, and improvements in our products.",
        link: "/changelogs",
        linkText: "Explore ",
        iconColor: "dark:!text-white text-gray-500",
        buttonColor: "text-blue-500 dark:text-purple-400",
        target: "_self"
    },
    //   {
    //     title: "Service Status",
    //     icon: GrServices,
    //     description: "Stay updated on the latest status of our services to make informed decisions.",
    //     link: "https://status.yourgpt.ai/",
    //     linkText: "Check status",
    //     iconColor: "dark:text-[#84ee53] text-gray-800/90",
    //     target:"_blank"
    //   },
    // {
    //   title: "GDPR Compliance",
    //   icon: TbArrowsCross,
    //   description: "Learn about our GDPR compliance details.",
    //   link: "https://docs.yourgpt.ai/gdpr",
    //   linkText: "Learn about",
    //   iconColor: "dark:text-[#ee5389] text-white",
    //   bgPattern: "",
    //   className: "p-8 border dark:border-gray-700 border-gray-200 rounded-lg shadow !mt-0 h-[228px] lg:h-[180px] dark:hover:border-blue-400 hover:border-gray-400 transition-colors duration-500"
    // }
];

// Reusable Card Component
export const InfoCard = ({ title, icon: Icon, description, link, linkText, iconColor, buttonColor, bgPattern, target }) => (
    <a href={link} target={target} className=" group flex flex-col justify-between border dark:border-gray-700 border-gray-200 rounded-2xl dark:hover:rounded-2xl hover:rounded-2xl shadow !mt-0 h-[430px] dark:hover:border-blue-500/30 hover:border-gray-300 transition-colors duration-500 max-w-[361px] dark:hover:bg-blue-500/10 hover:bg-gray-50 no-underline">
        <div className={`flex justify-center items-center min-h-[190px] dark:bg-[url('/assets/card-bg.svg')] bg-center bg-no-repeat bg-gray-100 dark:bg-black rounded-xl dark:rounded-2xl rounded-br-none rounded-bl-none dark:rounded-br-none dark:rounded-bl-none`}>
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
            <div className={`${buttonColor} font-semibold transition-all duration-300 flex items-center gap-1`}>
                {linkText}
                <GoArrowRight className='group-hover:translate-x-1 transition-all duration-300' />
            </div>
        </div>
    </a>


);

