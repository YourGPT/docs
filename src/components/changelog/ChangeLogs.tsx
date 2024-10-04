import { useState } from "react";
import ChangeLogItem from "./ChangeLogItem";
import changelogs from "~/data/changelogs.json";
// console.log(changelogs);

export default function ChangeLogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getCurrentChangelogs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // return changelogs.slice(startIndex, endIndex);
    const data = changelogs.slice(startIndex, endIndex);
    return data;
  };

  const loadMore = () => {
    if (currentPage * itemsPerPage < changelogs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentChangelogs = getCurrentChangelogs();

  return (
    <div>
      <div id="changelogs">
        {currentChangelogs.map((changelog) => (
          <ChangeLogItem key={changelog.id} {...changelog} />
        ))}
      </div>
      {currentPage * itemsPerPage < changelogs.length && (
        <button id="load-more" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
