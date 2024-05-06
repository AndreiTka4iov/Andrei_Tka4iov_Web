import {
  Box,
  Container,
  Flex,
  Image,
  Title,
  UnstyledButton,
  rem,
} from "@mantine/core";
import styles from "./styles.module.css";
import { CSSProperties } from "react";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Flex gap={16} w={"100%"}>
      <Flex gap={12} direction={'column'}>
        <Title order={1} className={styles.title}>
          About Me
        </Title>
        <Box>
          <p className={styles.descr}>
            Hello, my name is Andrei Tkachev. I live in the city of Moscow. I am
            a Full stack developer with commercial experience of more than 2
            years. Additionally, I am engaged in freelance projects. I am always
            open for new proposals. If you have a job offer, want to get help or
            just want to contact me, please use the links on the page header or
            fill out the contact form. I will definitely get in touch with you.
          </p>
        </Box>
        <div className={styles.navLinks}>
          <a
            href="https://t.me/tcka4"
            target="_blank"
            rel="noreferrer"
            style={{ "--l": 1 } as React.CSSProperties}
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
            style={{ "--l": 2 } as React.CSSProperties}
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
            style={{ "--l": 3 } as React.CSSProperties}
            className={styles.socialLinks}
          >
            <UnstyledButton onClick={() => {}} className={styles.mainLink}>
              <FaGithub
                style={{ width: rem(22), height: rem(22) }}
                className={styles.icon}
              />
            </UnstyledButton>
          </a>
        </div>
      </Flex>
      <Container className={styles.image}>
        <div className={styles.wave} style={{ "--i": 1 } as CSSProperties} />
        <div className={styles.imageChilder}>
          <Image src="/me.jpeg" />
        </div>
        <div className={styles.wave} style={{ "--i": 2 } as CSSProperties} />
        <div className={styles.wave} style={{ "--i": 3 } as CSSProperties} />
        <div className={styles.wave} style={{ "--i": 4 } as CSSProperties} />
      </Container>
    </Flex>
  );
};

export default AboutMe;
