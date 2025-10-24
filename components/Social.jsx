import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/ada-ugo" },
  { icon: <FaEnvelope />, path: "mailto:adaportfolio25@gmail.com" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank" // Opens GitHub/LinkedIn in a new tab
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
