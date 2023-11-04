"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Blog", href: "/" },
  { name: "Users", href: "/users" },
];

function Navbar() {
  const currentPath = usePathname();

  return (
    <header className="bg-white shadow-[0_0_0_1px_rgba(0,_0,_0,_0.08)] h-12 sticky top-0 z-10">
      <nav className="container h-full flex relative">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn("relative inline-flex items-center justify-center text-center px-3 text-sm text-gray-500 font-normal hover:text-gray-900", {
              "before:content-[''] before:block before:absolute before:bottom-0 before:left-2 before:right-2 before:border-b-2 before:border-b-gray-700":
                link.href === currentPath,
              "text-gray-900": link.href === currentPath,
            })}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
