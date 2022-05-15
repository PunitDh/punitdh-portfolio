import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiReplit } from "react-icons/si";
import { AiFillCodepenCircle } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/punitdh/"
        title="LinkedIn"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/PunitDh"
        target="_blank"
        title="GitHub"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://replit.com/@punitdharmadhik"
        target="_blank"
        title="Replit"
        rel="noreferrer"
      >
        <SiReplit />
      </a>
      <a
        href="https://codepen.io/punitdh"
        target="_blank"
        title="CodePen"
        rel="noreferrer"
      >
        <AiFillCodepenCircle />
      </a>
    </div>
  );
};

export default HeaderSocials;
