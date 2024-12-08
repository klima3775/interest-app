import React, { useState } from "react";
// Это иконки через библиотеку. Их можно заменить на свои
import {
  MenuIcon,
  XIcon,
  LockClosedIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Logo from "../../assets/svg/logo_and_text.svg";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <img src={Logo} alt="Logo" className="w-32 h-15" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 focus:outline-none"
        >
          {isOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed top-16 right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50"
          style={{ zIndex: 1000 }}
        >
          <div className="flex justify-between px-4 py-2 border-b">
            <LockClosedIcon className="w-6 h-6 text-gray-700" />
            <CogIcon className="w-6 h-6 text-gray-700" />
            <UserIcon className="w-6 h-6 text-gray-700" />
          </div>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Menu
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Contact
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            About Us
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Analysis
          </a>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
