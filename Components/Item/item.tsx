import React, { useState, useEffect } from "react";
import TagItem from "../Tags/tag";
import Link from "next/link";
export interface ItemProps {
  item?: {
    _id?: any;
    title?: string;
    tag?: [];
    highlight?: boolean;
    time?: any;
  };
}

export function Item(props: ItemProps) {
  return (
    <li className={"item"}>
      <Link href={`/blog/${props.item?._id}`} passHref>
        <a className="item-link">
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
        </a>
      </Link>
    </li>
  );
}
