'use client';

import Link from "next/link";
import React, { useState } from 'react';
import { RiHomeOfficeFill } from 'react-icons/ri';
import { usePathname } from "next/navigation";


const Navbar = () => {
  const links = [
    { id: 1, href: "/", label: "home" },
    { id: 2, href: "/projects/", label: "projects" },
    { id: 3, href: "/resume/", label: "resume" },
  ];
  const path = usePathname();

  const defLinkStyle = 'hover:scale-125 hover:text-white duration-300 delay-300';
  const activeLinkStyle = 'underline';

  return (
    <nav aria-label="breadcrumb" className="md:w-full w-1/2 h-10 mx-auto md:mx-0">
      <ol className="flex flex-wrap text-white items-center w-full px-0 py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
        <li
          className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
          <Link
            href={links[0].href}
            className={`scale-125 hover:scale-150 duration-300 delay-300 ${path === "/" || path === "" ? 'scale-150' : ''}`}>
            <RiHomeOfficeFill/>
          </Link>
          <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500"> / </span>
        </li>
        <li
          className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
          <Link
            href={links[1].href}
            className={`${defLinkStyle} ${path.startsWith("/projects") ? activeLinkStyle : ''}`}>
            {links[1].label}
          </Link>
          <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500"> / </span>
        </li>
        <li
          className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
          <Link
            href={links[2].href}
            className={`${defLinkStyle} ${path.startsWith("/resume") ? activeLinkStyle : ''}`}>
            {links[2].label}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
