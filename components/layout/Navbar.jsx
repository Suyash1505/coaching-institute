"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Faculty", href: "/faculty" },
  { name: "Results", href: "/results" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/3 border-gray-200/50"
          : "bg-white border-gray-100"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#142B4A] text-white">
            <GraduationCap size={26} />
          </div>

          <div>
            <h1 className="font-heading text-lg font-bold text-[#142B4A]">
              Apex Academy
            </h1>
            <p className="text-[10px] font-medium tracking-[2px] text-gray-500">
              LEARN • GROW • SUCCEED
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-600 transition-colors hover:text-[#F28C45] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#F28C45] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-lg bg-[#142B4A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F28C45] hover:text-[#142B4A] hover:shadow-md lg:flex"
        >
          Enquire Now
          <ArrowUpRight size={17} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-[#142B4A] transition-colors hover:bg-gray-100 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-96 border-t border-gray-200/60 opacity-100"
            : "max-h-0 border-t-0 opacity-0 pointer-events-none"
        } bg-white/95 backdrop-blur-xl`}
      >
        <div className="flex flex-col gap-4 px-5 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#F28C45]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 rounded-lg bg-[#142B4A] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F28C45] hover:text-[#142B4A]"
          >
            Enquire Now
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
