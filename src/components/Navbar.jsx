"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when the full-screen menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* LOGO */}
      <div className={styles.logo}>
        <span>V.</span> Vinay
      </div>

      {/* NAV (Desktop) */}
      <nav className={styles.nav}>
        {sections.map((item) => (
          <button
            key={item}
            className={`${styles.link} ${active === item ? styles.active : ""}`}
            onClick={() =>
              document.getElementById(item)?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            {item}
          </button>
        ))}
      </nav>

      {/* RIGHT */}
      <div className={styles.right}>
        <a href="/resume.pdf" download className={styles.resumeBtn}>
          Resume
        </a>

        {/* Animated Hamburger / Close Button */}
        <div
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MOBILE FULL SCREEN MENU (Kept in DOM for smooth exit animations) */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {sections.map((item, index) => (
          <button
            key={item}
            className={active === item ? styles.activeMobile : ""}
            style={{ transitionDelay: menuOpen ? `${index * 0.1}s` : "0s" }} // Staggered entry effect
            onClick={() => {
              setMenuOpen(false);
              // Small delay to let the menu close slightly before scrolling
              setTimeout(() => {
                document.getElementById(item)?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 300);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  );
}