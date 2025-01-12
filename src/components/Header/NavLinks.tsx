import { Button, Container, Tooltip, UnstyledButton, rem } from "@mantine/core";
import styles from "./styles.module.css";

import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { FC } from "react";
import { Link } from "react-scroll";

interface NavLinksProps {
  toggleModal: () => void;
}
const NavLinks: FC<NavLinksProps> = ({ toggleModal }) => {
  const style1 = { "--i": 1 } as React.CSSProperties;
  const style2 = { "--i": 2 } as React.CSSProperties;
  const style3 = { "--i": 3 } as React.CSSProperties;
  const style4 = { "--i": 4 } as React.CSSProperties;
  const style5 = { "--i": 5 } as React.CSSProperties;
  const style6 = { "--l": 1 } as React.CSSProperties;
  const style7 = { "--l": 2 } as React.CSSProperties;
  const style8 = { "--l": 3 } as React.CSSProperties;

  return (
    <nav className={styles.navLinks}>
      <Link
        to="about"
        smooth={true}
        offset={-80}
        duration={500}
        style={style1}
        className={styles.links}
      >
        {" "}
        About Me <IoIosArrowRoundForward className={styles.linkIcon} />
      </Link>
      <Link
        to={"education"}
        smooth={true}
        offset={-80}
        duration={500}
        style={style2}
        className={styles.links}
      >
        Education <IoIosArrowRoundForward className={styles.linkIcon} />
      </Link>
      <Link
        to={"skills"}
        smooth={true}
        offset={-80}
        duration={500}
        style={style3}
        className={styles.links}
      >
        Skills <IoIosArrowRoundForward className={styles.linkIcon} />
      </Link>
      <Link
        to={"experience"}
        smooth={true}
        offset={-80}
        duration={500}
        style={style4}
        className={styles.links}
      >
        Experience <IoIosArrowRoundForward className={styles.linkIcon} />
      </Link>
      <Link
        to={"projects"}
        smooth={true}
        offset={-80}
        duration={500}
        style={style5}
        className={styles.links}
      >
        Projects <IoIosArrowRoundForward className={styles.linkIcon} />
      </Link>
      <Button
        variant="gradient"
        gradient={{ from: "#00c6ff", to: "#0072ff", deg: 45 }}
        size="xs"
        radius="md"
        className={styles.button}
        onClick={toggleModal}
      >
        Contact Me
      </Button>
      <a
        href="https://t.me/tcka4"
        target="_blank"
        rel="noreferrer"
        style={style6}
        className={styles.socialLinks}
      >
        <UnstyledButton onClick={() => {}} className={styles.mainLink}>
          <FaTelegramPlane
            style={{ width: rem(22), height: rem(22) }}
            className={styles.icon}
          />
        </UnstyledButton>
      </a>
      <a
        href="mailto:andrei.tkachiov@gmail.com"
        target="_blank"
        rel="noreferrer"
        style={style7}
        className={styles.socialLinks}
      >
        <UnstyledButton onClick={() => {}} className={styles.mainLink}>
          <IoMdMail
            style={{ width: rem(22), height: rem(22) }}
            className={styles.icon}
          />
        </UnstyledButton>
      </a>
      <a
        href="https://github.com/AndreiTka4iov"
        target="_blank"
        rel="noreferrer"
        style={style8}
        className={styles.socialLinks}
      >
        <UnstyledButton onClick={() => {}} className={styles.mainLink}>
          <FaGithub
            style={{ width: rem(22), height: rem(22) }}
            className={styles.icon}
          />
        </UnstyledButton>
      </a>
    </nav>
  );
};

export default NavLinks;
