"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import SwitchBtn from "../atomicComponent/SwitchBtn";

export default function Header() {
  const [list, setList] = useState([
    "Home",
    "Experience",
    "Projects",
    "Skills",
    "Contacts",
  ]);
  const [navItems] = useState([
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/portfolio-projects" },
    { label: "Skills", path: "/skills" },
    { label: "Contacts", path: "/get-in-touch" },
  ]);

  console.log(`list ${list}`);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 dark:text-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <p className="text-white text-2xl font-bold">Aarti Yadav</p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              {item.label}
            </Link>
          ))}
          <SwitchBtn />
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-200 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-blue-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root text-2xl">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* {list.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2  font-semibold text-gray-500 hover:bg-gray-50"
                  >
                    {item}
                  </a>
                ))} */}
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="-mx-3 block rounded-lg px-3 py-2  font-semibold text-gray-500 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
