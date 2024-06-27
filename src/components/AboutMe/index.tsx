import { Box, Container, Flex, Image, Text, Title } from "@mantine/core";
import styles from "./styles.module.css";
import { CSSProperties } from "react";

const AboutMe = () => {
  return (
    <Flex gap={16} w={"100%"} className={styles.wrapper}>
      <Flex gap={12} direction={"column"} className={styles.text}>
        <Flex justify={"space-between"}>
          <Title order={1} className={styles.title}>
            About Me
          </Title>
        </Flex>
        <Box>
          <Text className={styles.descr}>
            Hello, my name is Andrei Tkachev. I live in the city of Moscow. I am
            a Fullstack Developer with over 3 years of commercial experience. My
            expertise spans across various domains, including leading
            development teams, optimizing code, and implementing new
            technologies.
            <br />
            <br />
            I have held positions such as Head of IT Department and Tech Lead
            Frontend Developer at ООО НФ АЙТИ, where I managed teams, developed
            comprehensive documentation, and launched significant projects using
            methodologies like SCRUM. My technical skills include Redux,
            JavaScript, TypeScript, Sass, HTML5, CSS3, Node.js, MongoDB,
            PostgreSQL, React, Next.js, NestJS, MobX, Express.js, and Jest.
            <br />
            <br />
            Additionally, I engage in freelance projects. I am always open to
            new proposals. If you have a job offer, need help with a project, or
            simply want to get in touch, please use the links on the page header
            or fill out the contact form. I will definitely get in touch with
            you.
            <br />
            <br />
            Thank you for your interest!
            <br />
            <br />
          </Text>
        </Box>
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
