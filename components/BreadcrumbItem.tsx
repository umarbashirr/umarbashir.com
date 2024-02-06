import Link from "next/link";
import React from "react";

function BreadcrumbItem({
  url,
  name,
  index,
  isLast,
}: {
  url: string;
  name: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <React.Fragment>
      <li
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
        key={index}
        className="breadcrumb-element"
      >
        <Link itemProp="item" href={url} className="breadcrumb-element__link">
          <span itemProp="name" className="breadcrumb-element__name">
            {name}
          </span>
        </Link>
        <meta itemProp="position" content={index.toString()} />
      </li>

      {isLast ? "" : <span className="breadcrumb-element__divider">{">"}</span>}
    </React.Fragment>
  );
}

export default BreadcrumbItem;
