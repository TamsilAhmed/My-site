import IconButton from '@mui/material/IconButton';

import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>tamsilahmedbe@gmail.com</span>
        </p>
        <p>
          Github Username : <span>TamsilAhmed</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/tamsilahmed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://github.com/TamsilAhmed?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/tamsil_ahmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
