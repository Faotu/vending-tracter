"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GiFrostfire } from "react-icons/gi";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Vending", href: "/vending" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14 bg-fuchsia-50  ">
      <Link href="/">
        <GiFrostfire />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transistion-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
