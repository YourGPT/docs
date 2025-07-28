import { FaLaptopCode, FaAssistiveListeningSystems } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";
import { MdEventAvailable } from 'react-icons/md';
import { TbDatabaseSearch } from 'react-icons/tb';
import { VscSymbolVariable } from 'react-icons/vsc';
import { IoMdOptions } from 'react-icons/io';

const icons = {
  intents: <FaLaptopCode className="text-2xl dark:text-[#eebd53] text-gray-600" />,
  events: <MdEventAvailable className="text-2xl dark:text-[#bd53ee] text-gray-600" />,
  entities: <TbDatabaseSearch className="text-2xl dark:text-[#84ee53] text-gray-600" />,
  messages: <FaMessage className="text-2xl dark:text-[#ee5389] text-gray-600" />,
  variables: <VscSymbolVariable className="text-3xl dark:text-[#3347ff] text-gray-600" />,
  listeners: <FaAssistiveListeningSystems className="text-2xl dark:text-[#4ee] text-gray-600" />,
  advanced: <IoMdOptions className="text-2xl dark:text-white text-gray-600" />,
};

const Studio = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map(({ title, icon, description, link }) => (
        <div key={title} className="p-8 border dark:border-gray-700 rounded-lg dark:shadow-md shadow-sm !mt-0 h-[200px] dark:hover:border-blue-400 hover:border-gray-400 transition-colors duration-500">
          <div className="flex items-center text-xl dark:text-white text-gray-700 font-semibold tracking-tight">
            <div className="p-2 pl-0">{icons[icon]}</div>
            {title}
          </div>
          <p className="dark:text-inherit text-gray-600 pl-[32px] !mt-1">{description}</p>
          <a href={link} className="no-underline font-semibold transition-colors duration-300 text-lg inline-block mt-4 pl-[32px]">Learn more</a>
        </div>
      ))}
    </div>
  );
};

export default Studio;
