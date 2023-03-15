import React from "react";
import Link from "next/link";

import { NavLink } from "./Header";

import Icon from "@/icons";

interface MobileNavigationProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navLinks: NavLink[];
}

const MobileNavigation = ({
  isOpen,
  toggleMenu,
  navLinks,
}: MobileNavigationProps) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen w-3/4 transform bg-white transition duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="py-4 px-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">
            <Icon type="Logo" />
          </div>
          <button
            className="text-blue-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <Icon type="Cross" className="h-6" />
          </button>
        </div>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.link}>
                <Link
                  href={link.link}
                  className="block py-2 font-medium text-gray-700 transition duration-150 ease-in-out hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
