import React, { useState, useEffect } from "react";
import TagItem from "../Tags/tag";
export interface ItemProps {
  item?: {
    title?: string;
    tag?: [];
    highlight?: boolean;
    time?: any;
  };
}

export function Item(props: ItemProps) {
  return (
    <li className={"item"}>
      <div>
        <span className="item-createAt">{props.item?.time}</span>
        {props.item?.highlight ? (
          <span className="item-highlight">✨</span>
        ) : (
          ""
        )}
      </div>
      <h3 className="title">{props?.item?.title}</h3>
      <div>
        {props.item?.tag?.map((tagItem, index) => (
          <TagItem key={index} tag={tagItem} />
        ))}
      </div>
    </li>
  );
}
