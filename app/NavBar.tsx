import Link from "next/link";
import React from "react";
import { GiFireSpellCast } from "react-icons/gi";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Vending", href: "/vending" },
  ];

  return (
    <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14 ">
      <Link href="/">
        <GiFireSpellCast />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
