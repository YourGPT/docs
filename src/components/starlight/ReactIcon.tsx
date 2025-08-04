import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';
import * as HiIcons from 'react-icons/hi';
import * as TbIcons from 'react-icons/tb';
import * as LuIcons from 'react-icons/lu';
import * as BiIcons from 'react-icons/bi';

// Combine all icon packs into a single object
const AllIcons = {
  ...FaIcons,
  ...FiIcons,
  ...IoIcons,
  ...BsIcons,
  ...MdIcons,
  ...GrIcons,
  ...HiIcons,
  ...TbIcons,
  ...LuIcons,
  ...BiIcons
};

interface ReactIconProps {
  icon: string;
  color?: string;
  size?: string | number;
  className?: string;
}

export default function ReactIcon({ icon, color, size = "1.333em", className = "" }: ReactIconProps) {
  // Check if icon exists
  if (!icon || typeof icon !== 'string') {
    return null;
  }

  // For simple icons like "rocket" or "information",
  // prefix with "Fa" to look for FaRocket, FaInformation, etc.
  let iconComponent = null;

  if (icon.includes('Fa') || icon.includes('Fi') || icon.includes('Io') || 
      icon.includes('Bs') || icon.includes('Md') || icon.includes('Gr') || 
      icon.includes('Hi') || icon.includes('Tb') || icon.includes('Lu') || 
      icon.includes('Bi')) {
    // If icon already has a prefix, use it directly
    iconComponent = AllIcons[icon as keyof typeof AllIcons];
  } else {
    // Try with various prefixes if no prefix is provided
    const prefixes = ['Fa', 'Fi', 'Io', 'Bs', 'Md', 'Gr', 'Hi', 'Tb', 'Lu', 'Bi'];
    for (const prefix of prefixes) {
      // Convert first letter to uppercase for camelCase format
      const formattedName = icon.charAt(0).toUpperCase() + icon.slice(1);
      const iconName = `${prefix}${formattedName}`;
      
      if (AllIcons[iconName as keyof typeof AllIcons]) {
        iconComponent = AllIcons[iconName as keyof typeof AllIcons];
        break;
      }
    }
  }

  // If icon component found, render it with the provided props
  if (iconComponent) {
    const IconComp = iconComponent;
    return <IconComp color={color} size={size} className={className} />;
  }

  // Fallback text for debugging
  return null;
}
