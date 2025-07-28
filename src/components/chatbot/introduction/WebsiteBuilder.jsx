import { FaWebflow } from "react-icons/fa6";
import { FaShopify,FaWix ,FaWordpress } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { SiCarrd } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

const icons = {
  wordpress: <FaWordpress className="text-xl text-blue-600 dark:text-blue-400" />,
  shopify: <FaShopify className="text-xl text-green-600 dark:text-green-400" />,
  Bubble: <IoIosChatbubbles className="text-xl text-purple-600 dark:text-purple-400" />,
  webflow: <FaWebflow className="text-xl text-indigo-600 dark:text-indigo-400" />,
  wix: <FaWix className="text-xl text-pink-600 dark:text-pink-400" />,
  carrd: <SiCarrd className="text-xl text-orange-600 dark:text-orange-400" />,
  // icon for /chatbot/integrations/api-integration
  api: <AiFillApi className="text-xl text-teal-600 dark:text-teal-400" />,
  session: <IoChatboxEllipsesSharp className="text-xl text-red-600 dark:text-red-400" />,
  ghost: <IoIosChatbubbles className="text-xl text-gray-600 dark:text-gray-400" />,
};
const WebsiteBuilder = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map(({ title, description, icon, link,index }) => (
        <div key={index} className="card-component p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm dark:shadow-md h-[200px] md:h-[180px] hover:border-gray-400 dark:hover:border-blue-400 transition-all duration-500 !mt-0 bg-white dark:bg-gray-800">
          <div className="flex items-center text-2xl font-semibold tracking-tight">
            <div className="icon-container p-2 pl-0 text-2xl rounded-md mr-2">{icons[icon]}</div>
            <p className="ml-2 text-xl text-gray-800 dark:text-white !mt-0">
              {title}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 pl-[35px] !mt-1">{description}</p>
          <a
            href={link}
            className="component-link no-underline font-semibold transition-all duration-300 text-lg mt-4 inline-block pl-[35px] text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Learn more
          </a>
        </div>
      ))}
    </div>
  );
};

export default WebsiteBuilder;
