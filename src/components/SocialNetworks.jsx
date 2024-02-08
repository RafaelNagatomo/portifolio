import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { SiGmail } from "react-icons/si";

import "../styles/components/socialnetworks.sass";

import { AiFillEnvironment } from "react-icons/ai";

const socialNetworks = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/rafaelnagatomo/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "github",
    link: "https://github.com/RafaelNagatomo",
    icon: <FaGithub />,
  },
  {
    name: "gmail",
    link: "mailto:rafaelnagatomo@gmail.com",
    icon: <SiGmail />,
  },
  {
    name: "pin",
    link: "https://www.google.com/maps/place/Mirassol,+SP,+15130-000/@-20.8167642,-49.5264321,14z/data=!3m1!4b1!4m6!3m5!1s0x94bdafa73377d3ad:0x604eced941d3a066!8m2!3d-20.815777!4d-49.5050637!16s%2Fg%2F11bc6cnklt?entry=ttu",
    icon: <AiFillEnvironment />,
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          target="_blank"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
      {/* <p className="pin">
        Mirassol-SP,
        <br /> Brasil
      </p>
      ; */}
    </section>
  );
};

export default SocialNetworks;
