"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { type Session } from "next-auth";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";

type MobileNavProperties = {
  children: React.ReactNode;
  session: Session | null;
};

const MobileNav = ({ children, session }: MobileNavProperties) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname, session]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="block md:hidden fixed top-2 right-4 z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          <HamburgerIcon className="text-primary" />
        </button>
      </nav>
      <div className={`${isMenuOpen ? "flex" : "hidden"} md:hidden justify-end h-auto`}>
        {children}
      </div>
    </>
  );
};

export default MobileNav;
