import React, { useState, useMemo } from "react";
import ChangeLogItem from "./ChangeLogItem.tsx";
import changelogs from "~/data/changelogs.json";

interface Changelog {
  version: string;
  date: string;
  img: string;
  data: string;
}

export default function ChangeLogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const getCurrentChangelogs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return changelogs.slice(startIndex, endIndex);
  }, [currentPage]);

  const hasMoreItems = currentPage * itemsPerPage < changelogs.length;

  const loadMore = () => {
    if (hasMoreItems) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-screen-lg mx-auto">
      <div
        id="changelogs"
        className="w-full space-y-6 pb-32"
        role="feed"
        aria-label="Changelog entries"
      >
        {getCurrentChangelogs.map((changelog: Changelog, index: number) => (
          <ChangeLogItem
            key={`${changelog.version}-${changelog.date}`}
            {...changelog}
            isFirst={index === 0}
            isLast={index === getCurrentChangelogs.length - 1}
          />
        ))}
      </div>

      {hasMoreItems && (
        <button
          id="load-more"
          onClick={loadMore}
          className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800"
          aria-label="Load more changelog entries"
        >
          Load More
        </button>
      )}
    </div>
  );
}
