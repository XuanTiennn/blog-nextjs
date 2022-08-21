import * as React from "react";
import { DarkLight } from "../SwithTheme/darkligh";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <div className="header d-flex justify-content-between">
      <div>
        header left
      </div>
      <DarkLight />
    </div>
  );
}
