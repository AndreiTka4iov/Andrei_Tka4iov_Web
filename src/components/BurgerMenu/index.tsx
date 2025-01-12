import styles from "./styles.module.css";
import clsx from "clsx";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { Flex, UnstyledButton } from "@mantine/core";
import { FaUser } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";

import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useModal } from "@/hooks/modals/useModal";
import { ReactElement } from "react";
import { Link } from "react-scroll";

interface navLinksType {
  key: number;
  href: string;
  icon: ReactElement;
  text: string;
}

const BurgerMenu = () => {
  const { status, toggleModal } = useModal("burger");

  const navLinks: navLinksType[] = [
    {
      key: 1,
      href: "home",
      icon: <IoMdHome className={styles.icon} />,
      text: "Home",
    },
    {
      key: 2,
      href: "about",
      icon: <FaUser className={styles.icon} />,
      text: "About Me",
    },
    {
      key: 3,
      href: "education",
      icon: <FaUniversity className={styles.icon} />,
      text: "Education",
    },
    {
      key: 4,
      href: "skills",
      icon: <FaBrain className={styles.icon} />,
      text: "Skills",
    },
    {
      key: 5,
      href: "experience",
      icon: <FaBrain className={styles.icon} />,
      text: "Experience",
    },
    {
      key: 6,
      href: "projects",
      icon: <IoGrid className={styles.icon} />,
      text: "Projects",
    },
  ];

  const socialLinks: navLinksType[] = [
    {
      key: 1,
      href: "https://t.me/tcka4",
      icon: <FaTelegramPlane className={styles.icon} />,
      text: "tcka4",
    },
    {
      key: 2,
      href: "mailto:andrei.tkachiov@gmail.com",
      icon: <IoMdMail className={styles.icon} />,
      text: "andrei.tkachiov@gmail.com",
    },
    {
      key: 3,
      href: "https://github.com/AndreiTka4iov",
      icon: <FaGithub className={styles.icon} />,
      text: "AndreiTka4iov",
    },
  ];

  return (
    <div className={clsx(styles.menu, status && styles.show)}>
      <span className={styles.nameTag}>Navigation</span>
      {navLinks.map((element) => (
        <Link
          key={element.key}
          to={element.href}
          smooth={true}
          offset={-80}
          duration={500}
          className={styles.links}
          onClick={() => toggleModal()}
        >
          {element.icon}
          <Flex className={styles.text}>
            {element.text}{" "}
            <IoIosArrowRoundForward className={styles.linkIcon} />
          </Flex>
        </Link>
      ))}
      <span className={styles.nameTag}>Contact</span>
      <UnstyledButton
        className={styles.links}
        onClick={() => {
          toggleModal();
          toggleModal("contact");
        }}
      >
        <FaWpforms className={styles.icon} />
        <Flex className={styles.text}>Contact Form</Flex>
      </UnstyledButton>
      {socialLinks.map((socialLink) => (
        <a
          key={socialLink.key}
          href={socialLink.href}
          target="_blank"
          rel="noreferrer"
          className={styles.links}
        >
          {socialLink.icon}
          <Flex className={styles.text}>
            {socialLink.text}{" "}
            <IoIosArrowRoundForward className={styles.linkIcon} />
          </Flex>
        </a>
      ))}
    </div>
  );
};

export default BurgerMenu;
