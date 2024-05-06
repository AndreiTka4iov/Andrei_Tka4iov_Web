import AboutMe from "@/components/AboutMe";
import { Container } from "@mantine/core";
import Head from "next/head";

const About = () => {
  return (
    <Container mt={80} w={"100%"}>
      <Head>
        <title>About Me</title>
      </Head>
      <AboutMe />
    </Container>
  );
};

export default About;
