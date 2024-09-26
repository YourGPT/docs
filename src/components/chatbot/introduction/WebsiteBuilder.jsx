import { FaWebflow } from "react-icons/fa6";
import { FaShopify,FaWix ,FaWordpress } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { SiCarrd } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

const icons = {
  wordpress: <FaWordpress className="text-xl text-gray-700 dark:text-[#25D366]" />,
  shopify: <FaShopify className="text-xl text-gray-700 dark:text-[#0088cc]" />,
  Bubble: <IoIosChatbubbles className="text-xl text-gray-700 dark:text-[#00C300]" />,
  webflow: <FaWebflow className="text-xl text-gray-700 dark:text-[#E1306C]" />,
  wix: <FaWix className="text-xl text-gray-700 dark:text-[#c025c3]" />,
  carrd: <SiCarrd className="text-xl text-gray-700 dark:text-[#1877F2]" />,
  // icon for /chatbot/integrations/api-integration
  api: <AiFillApi className="text-xl text-gray-700 dark:text-[#25D366]" />,
  session: <IoChatboxEllipsesSharp className="text-xl text-gray-700 dark:text-[#c025c3]" />,
};
const WebsiteBuilder = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map(({ title, description, icon, link,index }) => (
        <div key={index} className="p-6 border dark:border-gray-700 rounded-lg dark:shadow-md shadow-sm h-[200px] md:h-[180px] dark:hover:border-blue-400 hover:border-gray-400 transition-all duration-500 !mt-0 ">
          <div className="flex items-center text-2xl font-semibold tracking-tight">
            <div className="p-2 pl-0 text-2xl">{icons[icon]}</div>
            <p className="ml-2 text-xl dark:text-inherit text-gray-700 !mt-0">
              {title}
            </p>
          </div>
          <p className="dark:text-inherit text-muted pl-[35px] !mt-1">{description}</p>
          <a
            href={link}
            className="no-underline font-semibold transition-all duration-300 text-lg mt-4 inline-block pl-[35px]"
          >
            Learn more
          </a>
        </div>
      ))}
    </div>
  );
};

export default WebsiteBuilder;
