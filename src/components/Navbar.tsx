import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "https://www.instagram.com/hello.wigeri" },
    // { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "https://api.whatsapp.com/send/?phone=6281385622350&text&type=phone_number&app_absent=0" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-[#FFFFFF] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <Coffee className="h-8 w-8 text-[#000000]" /> */}
            <img src="./logo.jpeg" className="w-[80px]"></img>
            {/* <span className="text-xl font-bold text-white">
              Wigeri
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                    ? "text-[#000000] bg-white/10"
                    : "text[#000000] hover:text-black hover:bg-white/5"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              size="sm"
              className="bg-[#000000] hover:bg-[#5a3e2a] text-white"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-[#000000] transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#3c2f2f] border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.path)
                      ? "text-[#000000] bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a href="https://api.whatsapp.com/send/?phone=6281385622350&text&type=phone_number&app_absent=0">
                  <Button
                    size="sm"
                    className="bg-[#93ba88] hover:bg-[#93ba88] text-white w-full"
                  >
                    Get Quote
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
