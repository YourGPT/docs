import React from 'react';
import { 
    FaQuestionCircle, 
    FaFileAlt, 
    FaEye, 
    FaDropbox, 
    FaDatabase,
    FaConfluence,
    FaIntercom,
    FaGlobe,
    FaCog
} from 'react-icons/fa';
  
import { 
    SiNotion, 
    SiGoogledocs,
} from 'react-icons/si';

const CustomIcons = ({ name, ...props }) => {
    const iconComponents = {
        question: FaQuestionCircle,
        file: FaFileAlt,
        eye: FaEye,
        dropbox: FaDropbox,
        database: FaDatabase,
        confluence: FaConfluence,
        intercom: FaIntercom,
        website: FaGlobe,
        settings: FaCog,
        notion: SiNotion,
        gdocs: SiGoogledocs,
    };

    const IconComponent = iconComponents[name];
    return IconComponent ? <IconComponent {...props} /> : null;
};

export default CustomIcons;