import { Flex, Text, UnstyledButton, rem } from "@mantine/core";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Flex gap={16}>
        <Link href={"/about"} className={styles.links}>
          About Me <IoIosArrowRoundForward className={styles.linkIcon} />
        </Link>
        <Link href={"/projects"} className={styles.links}>
          Projects <IoIosArrowRoundForward className={styles.linkIcon} />
        </Link>
        <Link href={"/education"} className={styles.links}>
          Education <IoIosArrowRoundForward className={styles.linkIcon} />
        </Link>
        <Link href={"/skills"} className={styles.links}>
          Skills <IoIosArrowRoundForward className={styles.linkIcon} />
        </Link>
        <Link href={"/experience"} className={styles.links}>
          Experience <IoIosArrowRoundForward className={styles.linkIcon} />
        </Link>
      </Flex>
      <Flex gap={16}>
        <a
          href="https://t.me/tcka4"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLinks}
        >
          <UnstyledButton onClick={() => {}} className={styles.mainLink}>
            <FaTelegramPlane
              style={{ width: rem(16), height: rem(16) }}
              className={styles.icon}
            />
          </UnstyledButton>
        </a>
        <a
          href="mailto:andrei.tkachiov@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLinks}
        >
          <UnstyledButton onClick={() => {}} className={styles.mainLink}>
            <IoMdMail
              style={{ width: rem(16), height: rem(16) }}
              className={styles.icon}
            />
          </UnstyledButton>
        </a>
        <a
          href="https://github.com/AndreiTka4iov"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLinks}
        >
          <UnstyledButton onClick={() => {}} className={styles.mainLink}>
            <FaGithub
              style={{ width: rem(16), height: rem(16) }}
              className={styles.icon}
            />
          </UnstyledButton>
        </a>
      </Flex>
      <Text className={styles.text}>© 2024 All Rights Reserved</Text>
    </footer>
  );
};

export default Footer;
