import React from "react";
import "./Navbar.css";
import { useEffect, useState } from "react";


function Navbar() {
    const [active, setActive] = useState("home");

  useEffect(() => {
    function handleScroll() {
      const home = document.getElementById("home");
      const about = document.getElementById("about");
      const skills = document.getElementById("skills");
      const education = document.getElementById("education");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");

      if (contact && window.scrollY >= contact.offsetTop - 100) {
          setActive("contact");
      } else if (projects && window.scrollY >= projects.offsetTop - 100) {
          setActive("projects");
      } else if (education && window.scrollY >= education.offsetTop - 100) {
          setActive("education");
      } else if (skills && window.scrollY >= skills.offsetTop - 100) {
          setActive("skills");
      } else if (about && window.scrollY >= about.offsetTop - 100) {
          setActive("about");
      } else {
          setActive("home");
      }
  }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <nav className="navbar">
            <h2 className="logo">Full<span className="full-dev">Dev</span></h2>

            <ul className="nav-link">
              <li><a className={active === "home" ? "active" : ""} href="#home">Home</a></li>
              <li><a className={active === "about" ? "active" : ""} href="#about">About</a></li>
              <li><a className={active === "skills" ? "active" : ""} href="#skills">Skills</a></li>
              <li><a className={active === "education" ? "active" : ""} href="#education">Education</a></li>
              <li><a className={active === "projects" ? "active" : ""} href="#projects">Projects</a></li>
              <li><a className={active === "contact" ? "active" : ""} href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;