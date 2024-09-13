import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane,FaInstagramSquare,FaSlack ,FaFacebookF,FaDiscord } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";

const icons = {
  whatsapp: <IoLogoWhatsapp className="text-xl text-gray-700 dark:text-[#25D366]" />,
  telegram: <FaTelegramPlane className="text-xl text-gray-700 dark:text-[#0088cc]" />,
  line: <IoIosChatbubbles className="text-xl text-gray-700 dark:text-[#00C300]" />,
  instagram: <FaInstagramSquare className="text-xl text-gray-700 dark:text-[#E1306C]" />,
  slack: <FaSlack className="text-xl text-gray-700 dark:text-[#c025c3]" />,
  facebook: <FaFacebookF className="text-xl text-gray-700 dark:text-[#1877F2]" />,
  discord: <FaDiscord className="text-xl text-gray-700 dark:text-[#6786f3]" />,
};

const SocialIntegration = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-4  ">
      {items.map(({ title,description, icon, link }) => (
        <div key={title} className="p-6 border dark:border-gray-700 rounded-lg dark:shadow-md shadow-sm h-[200px] md:h-[180px] dark:hover:border-blue-400 hover:border-gray-400 transition-all duration-500 !mt-0">
          <div className="flex items-center text-2xl text-white font-semibold tracking-tight ">
            <div className="p-2 pl-0 text-2xl">{icons[icon]}</div>
            <p className="ml-2 text-xl dark:text-inherit text-gray-700 !mt-0">{title}</p>
          </div>
          <p className="dark:text-inherit text-muted pl-[35px] !mt-1">{description}</p>
          <a href={link} className="no-underline font-semibold transition-all duration-300 text-lg mt-4 inline-block pl-[35px]">Learn more</a>
        </div>
      ))}
    </div>
  );
};

export default SocialIntegration;
