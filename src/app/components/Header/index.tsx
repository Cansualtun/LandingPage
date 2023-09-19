"use client";
import { useState } from "react";

const Data = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "New",
    url: "/new",
  },
  {
    name: "Popular",
    url: "/popular",
  },
  {
    name: "Trending",
    url: "/trending",
  },
  {
    name: "Categories",
    url: "/categories",
  },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">
        <img src="assets/icons/W.svg" className="h-8 mr-3" alt="Logo" />
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8">
          {Data.map((item) => (
            <li>
              <a
                href={item.url}
                className="block py-2 pl-3 pr-4 text-[#5E607A] rounded md:bg-transparent md:p-0 hover:text-[#F15D51]"
                aria-current="page"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      ></div>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-64 overflow-y-auto transition-transform duration-300 ease-in-out transform z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setDrawerOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <span className="text-5xl text-black">×</span>
        </button>

        <ul className="flex-col mt-40 font-medium">
          {Data.map((item) => (
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-[#00001A] space-y-10 text-xl"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
