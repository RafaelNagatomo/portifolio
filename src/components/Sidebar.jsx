import SocialNetworks from "./SocialNetworks";

import cv from "../img/cv-Rafael-Nagatomo.pdf";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <h1>Rafael Nagatomo</h1>
      <p>Desenvolvedor Front-end</p>
      <SocialNetworks />
      <a href={cv} download="cv-Rafael-Nagatomo" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
