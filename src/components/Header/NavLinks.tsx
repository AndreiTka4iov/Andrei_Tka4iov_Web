import { Button, Container, Tooltip, UnstyledButton, rem } from "@mantine/core";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";

const NavLinks = () => {
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
      <Link href={"/about"} style={style1} className={styles.links}>
        About Me <IoIosArrowRoundForward className={styles.linkIcon} />
      </Link>
      <Link href={"/projects"} style={style2} className={styles.links}>
        Projects <IoIosArrowRoundForward className={styles.linkIcon} />
      </Link>
      <Link href={"/education"} style={style3} className={styles.links}>
        Education <IoIosArrowRoundForward className={styles.linkIcon} />
      </Link>
      <Link href={"/skils"} style={style4} className={styles.links}>
        Skills <IoIosArrowRoundForward className={styles.linkIcon} />
      </Link>
      <Link href={"/experience"} style={style5} className={styles.links}>
        Experience <IoIosArrowRoundForward className={styles.linkIcon} />
      </Link>
      <Container className={styles.clearButton} />
      <Button
        variant="gradient"
        gradient={{ from: "indigo", to: "#6350d8", deg: 45 }}
        size="xs"
        radius="md"
        className={styles.button}
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
