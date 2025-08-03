"use client";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SwitchBtn from "../atomicComponent/SwitchBtn";
import Footer from "./Footer";

export default function Header() {
  const [navItems] = useState([
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Contacts", path: "/get-in-touch" },
  ]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-[#1E3A8A] dark:text-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <p className="text-white text-2xl font-bold">Aarti Yadav</p>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
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

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 text-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root text-2xl">
              <div className="-my-6 divide-y divide-white">
                <div className="space-y-4 py-6">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={handleLinkClick}
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-white hover:bg-gray-700 hover:text-blue-300 transition-colors"
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

      {/* This Outlet renders content from the matched route */}
      <Outlet />
      <Footer />
    </>
  );
}
