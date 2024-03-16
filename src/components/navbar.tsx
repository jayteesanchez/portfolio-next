'use client';

import Link from "next/link";
import React, { useState } from 'react';
import { RiHomeOfficeFill } from 'react-icons/ri';
import { usePathname } from "next/navigation";


const Navbar = () => {
  const links = [
    {
      id: 1,
      link: '/'
    },
    {
      id: 2,
      link: 'projects'
    },
    {
      id: 3,
      link: 'resume'
    },
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
            href={links[0].link}
            className={`scale-125 hover:scale-150 duration-300 delay-300 ${path.includes(links[0].link) ? 'scale-150' : ''}`}>
            <RiHomeOfficeFill/>
          </Link>
          <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500"> / </span>
        </li>
        <li
          className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
          <Link
            href={links[1].link}
            className={`${defLinkStyle} ${path.includes(links[1].link) ? activeLinkStyle : ''}`}>
            {links[1].link}
          </Link>
          <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500"> / </span>
        </li>
        <li
          className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
          <Link
            href={links[2].link}
            className={`${defLinkStyle} ${path.includes(links[2].link)  ? activeLinkStyle : ''}`}>
            {links[2].link}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;