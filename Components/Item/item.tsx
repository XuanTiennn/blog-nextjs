import * as React from "react";
export interface ItemProps {
  item?: {
    title?: string;
  };
}

export function Item(props: ItemProps) {
  return (
    <li className="item">
      <h3 className="title">{props?.item?.title}</h3>
    </li>
  );
}
