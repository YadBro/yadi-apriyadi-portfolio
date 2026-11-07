"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home", external: false },
  { label: "About", href: "#about", external: false },
  { label: "Portfolio", href: "#portfolio", external: false },
  {
    label: "Certifications",
    href: "https://www.linkedin.com/in/yadi-apriyadi/details/certifications/",
    external: true,
  },
  { label: "Skills", href: "#skills", external: false },
  { label: "Achievement", href: "#achievement", external: false },
  { label: "Contact", href: "#contact", external: false },
] as const;

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = headerRef.current?.offsetTop ?? 0;
      setIsScrolled(window.scrollY > offsetTop);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={
        isScrolled
          ? "bg-transparent absolute top-0 left-0 w-full flex items-center z-[9999] navbar-fixed"
          : "bg-transparent absolute top-0 left-0 w-full flex items-center z-[9999]"
      }
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-8">
            <a
              href="#home"
              aria-label="Yadi Apriyadi Home"
              className="font-bold text-lg text-primary block py-6"
            >
              <Image
                src="/assets/images/maskot.png"
                width={40}
                height={40}
                alt="maskot"
                priority
              />
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="nav-menu"
              className={
                isMenuOpen
                  ? "block absolute right-4 lg:hidden hamburger-active"
                  : "block absolute right-4 lg:hidden"
              }
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="hamburger-line origin-top-left"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line origin-bottom-left"></span>
            </button>

            <nav
              id="nav-menu"
              aria-label="Primary navigation"
              className={`${
                isMenuOpen ? "" : "hidden "
              } absolute bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                {navItems.map((item) => (
                  <li key={item.label} className="group py-3 mx-8">
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-base text-dark group-hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
