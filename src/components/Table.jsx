import React from "react";

const Table = ({ children, className = "" }) => {
  return (
    <div className={`nx-overflow-x-auto nx-shadow-lg nx-rounded-xl nx-my-8 ${className}`}>
      <table className="nx-w-full nx-text-base nx-text-neutral-700 dark:nx-text-neutral-200">
        <thead className="nx-text-sm nx-text-neutral-800 nx-uppercase nx-bg-gradient-to-r nx-from-blue-50 nx-to-blue-100 dark:nx-from-neutral-800 dark:nx-to-neutral-700 dark:nx-text-neutral-100 nx-sticky nx-top-0">
          <tr>
            {children.props.children[0].props.children.map((header, index) => (
              <th key={index} className="nx-px-6 nx-py-3 nx-font-semibold nx-border-b-2 nx-border-blue-300 dark:nx-border-neutral-600 nx-transition-colors nx-duration-300">
                {header.props.children}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children.props.children.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex} className={`nx-bg-white dark:nx-bg-neutral-900 ${rowIndex % 2 ? "nx-bg-blue-50 dark:nx-bg-neutral-800" : ""} hover:nx-bg-blue-100 dark:hover:nx-bg-neutral-700 nx-transition-colors nx-duration-300`}>
              {row.props.children.map((cell, cellIndex) => (
                <td key={cellIndex} className="nx-px-6 nx-py-4 nx-border-b nx-border-neutral-200 dark:nx-border-neutral-700">
                  {cell.props.children}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
