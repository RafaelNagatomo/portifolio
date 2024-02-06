import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { SiGmail } from "react-icons/si";

import "../styles/components/socialnetworks.sass";

import { AiFillEnvironment } from "react-icons/ai";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "gmail", icon: <SiGmail /> },
  { name: "pin", icon: <AiFillEnvironment /> },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
      <p className="pin">
        Mirassol-SP,
        <br /> Brasil
      </p>
    </section>
  );
};

export default SocialNetworks;
