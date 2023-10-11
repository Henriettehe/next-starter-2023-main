'use client'
import React, { useState } from "react";
import "./globals.css";
import Cards from "../../intro/components/Cards";
import SideMenu from "../../intro/components/SideMenu";

// Kilder: https://xn--fullstkk-o0a.no/courses/intro-react/13-lift-state  + Google + ChatGpt. Bruk av Tailwind-dokumentasjon og annet struktur samt logikk bak lukke/åpne side-menyen.

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 gap-5">
      <div className="z-10 max-w-5xl w-full items-center text-sm lg:flex flex-wrap gap-5 p-5">
        <Cards />
      </div>
      <aside className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform ease-in-out duration-300 transform translate-x-0">
        <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </aside>
    </main>
  );
}
