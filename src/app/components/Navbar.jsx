"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverley from "./MenuOverley";

function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const navLinks = [
    {
      title: "Sobre",
      path: "#about",
    },
    {
      title: "Projetos",
      path: "#projects",
    },
    {
      title: "Contato",
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-2">
        <Link
          href={"/"}
          className="text-3xl md:text-5xl text-white font-semibold"
        >
          {"<Edson/>"}
        </Link>
        <div className="block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded-full border-slate-200 text-salete-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded-full border-slate-200 text-salete-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-8 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        navBarOpen ? <MenuOverley links={navLinks}/> : null
      }
    </nav>
  );
}

export default Navbar;
