"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded  p-2 text-sm ${pathName === link.url && "rounded  cursor-pointer  text-white hover:bg-white/50 hover:text-black  bg-slate-400/40  shadow-md border border-slate-400/40"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
