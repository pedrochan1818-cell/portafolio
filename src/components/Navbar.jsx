import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // bloquear scroll en mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)
      .scrollIntoView({ behavior: "smooth" });
  
    setMobileMenuOpen(false);
  };
  
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar fixed-top">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="#inicio" className="navbar-logo">
          Pedro Ake Chan
        </a>

        {/* HAMBURGUESA */}
        <button
          className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* DESKTOP MENU */}
        <ul className="navbar-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileMenuOpen ? "show" : ""}`}>
        <ul className="mobile-links">

          <li>
            <a href="#inicio" onClick={closeMenu}>
              Inicio
            </a>
          </li>

          <li>
            <a href="#sobre-mi" onClick={closeMenu}>
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#proyectos" onClick={closeMenu}>
              Proyectos
            </a>
          </li>

          <li>
            <a href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;