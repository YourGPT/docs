// components/CardItem.jsx
import { BsPencilSquare } from 'react-icons/bs';
import { FaBars, FaCogs } from 'react-icons/fa';
import { IoExtensionPuzzle } from 'react-icons/io5';

const icons = {
  appearance: BsPencilSquare,
  theme: FaBars,
  domain: FaCogs,
  behavior: IoExtensionPuzzle,
};

const  Customization = ({ title, description, link, icon, iconColor }) => {
  const IconComponent = icons[icon];
  return (
    <div className="p-8 border dark:border-gray-700 rounded-lg dark:shadow-md shadow-sm h-[220px] md:h-[180px] dark:hover:border-blue-400 hover:border-gray-400 transition-all duration-500 !mt-0">
      <div className="flex  text-2xl text-white font-semibold !mt-0">
        <div className="p-2">
          <IconComponent className={`text-xl text-gray-700 dark:text-[${iconColor}]`} />
        </div>
        <p className="!mt-0 text-xl dark:text-inherit text-gray-700">{title}</p>
      </div>
      <p className='pl-[35px] !mt-1'>{description}</p>
      <a href={link} className="no-underline font-semibold transition-all duration-300 text-lg mt-4 inline-block pl-[35px] ">
        Learn more
      </a>
    </div>
  );
};

export default Customization;