import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { RiProjectorFill } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const handleActiveNav = (nav) => () => setActiveNav(nav);
  const navLinks = [
    { text: "", title: "Home", icon: <AiOutlineHome /> },
    { text: "about", title: "About", icon: <AiOutlineUser /> },
    { text: "experience", title: "Experience", icon: <BsBook /> },
    { text: "services", title: "Services", icon: <RiServiceLine /> },
    { text: "portfolio", title: "Portfolio", icon: <RiProjectorFill /> },
    { text: "contact", title: "Contact", icon: <BiMessageDots /> },
  ];

  return (
    <nav>
      {navLinks.map((link) => (
        <a
          href={`#${link.text}`}
          title={link.title}
          onClick={handleActiveNav(`#${link.text}`)}
          className={activeNav === `#${link.text}` ? "active" : ""}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
