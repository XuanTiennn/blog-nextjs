import * as React from "react";
import { Container } from "react-bootstrap";
export interface ILayoutProps {}

export function Layout(props: any) {
  return <Container className="wrapper">{props.children}</Container>;
}
