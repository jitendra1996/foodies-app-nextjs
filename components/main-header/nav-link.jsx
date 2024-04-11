"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "@/components/main-header/nav-link.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `font-normal font-sans bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent text-lg border-b-2 border-indigo-500`
          : `font-normal font-sans text-slate-600 text-lg hover:bg-gradient-to-r hover:from-violet-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent hover:border-b-2 hover:border-indigo-500`
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
