import React from "react";
import { ReactComponent as GitHubIcon } from "assests/imgs/github.svg";
import './styles.css'

const NavBar: React.FC = () => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/victorlui/dsmovie">
            <div className="dsmovie-contact">
              <GitHubIcon />
              <p className="dsmovie-contact-name">/devsuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
