import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AttachmentIcon from "@material-ui/icons/Attachment";

function Socials() {
  return (
    <div className="socials">
      <ul>
        <li>
          <a className="socials-link" href="https://github.com/henilp105">
            <GitHubIcon />
          </a>
          <p>Github </p>
        </li>
        <li>
          <a
            className="socials-link"
            href="https://www.linkedin.com/in/henil-panchal-9261b4228/"
          >
            <LinkedInIcon />
          </a>
          <p>LinkedIn </p>
        </li>
        <li>
          <a
            className="socials-link"
            href=""
          >
            <AttachmentIcon />
          </a>
          <p>Resume </p>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
