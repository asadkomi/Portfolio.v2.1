import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiPhoneMissedCall } from "react-icons/hi";

const SocialMedia = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/asadkomi/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/asadkomi",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:asadkomi@iastate.edu",
    },
    {
      id: 3,
      child: (
        <>
          Call me <HiPhoneMissedCall size={30} />
        </>
      ),
      href: "tel:+1 (402) 219-1587",
    },
  ];

  return (
    <div className=" flex-col bottom-20 left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-md duration-300 backdrop-blur-sm bg-gray-rgba " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-primary "
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

export default SocialMedia;
