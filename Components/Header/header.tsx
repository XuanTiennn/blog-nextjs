import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { DarkLight } from "../SwitchTheme/darklight";

export interface IHeaderProps {}
const navigation = [
  { name: "📝 Blog", href: "/" },
  { name: "📚 Reading list", href: "/reading-list" },
  { name: "💡 Projects", href: "/project" },
  { name: "🤷‍♂️ Me", href: "/me" },
];
export function Header(props: IHeaderProps) {
  const router = useRouter();
  console.log(router);
  return (
    <div className="header-wrapper">
      <div className="container header d-flex justify-content-between">
        <div>
          {navigation.map((navigate) => (
            <Link key={navigate.href} href={navigate.href}>
              <a
                href={navigate.href}
                className={router.route === navigate.href ? "active" : ""}
              >
                {navigate.name}
              </a>
            </Link>
          ))}
        </div>
        <DarkLight />
      </div>
    </div>
  );
}
