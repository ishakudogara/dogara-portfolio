import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const SmLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/grayoj",
    },
    {
      id: 2,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mgeraldoj07@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com",
    },

    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          WhatsApp <FaWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/2347013133065",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[30%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  duration-300 bg-white" +
              " "
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-black"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmLinks;
