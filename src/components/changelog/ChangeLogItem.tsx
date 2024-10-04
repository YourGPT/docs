import React from "react";
import { marked } from "marked";

interface ChangelogItemProps {
  version: string;
  date: string;
  data: string;
}

export default function ChangelogItem({ version, date, data }: ChangelogItemProps): React.ReactElement {
  const htmlContent = marked.parse(data);
  return (
    <div className="changelog-item">
      <h3>
        {version} - {date}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
