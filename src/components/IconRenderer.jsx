import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

const IconLibraries = {
  Fa: FaIcons,
  Fi: FiIcons,
  Io: IoIcons,
  Bs: BsIcons,
  Md: MdIcons
};

export default function IconRenderer({ icon, size = "1.5em", className = "" }) {
  if (!icon || typeof icon !== 'string') {
    return null;
  }

  // Extract library prefix (e.g., 'Fa' from 'FaUser')
  const prefix = icon.slice(0, 2);
  const library = IconLibraries[prefix];

  if (!library) {
    return <span>Icon not found</span>;
  }

  // Get the actual icon component
  const IconComponent = library[icon];
  
  if (!IconComponent) {
    return <span>Icon not found</span>;
  }

  return <IconComponent size={size} className={className} />;
}
