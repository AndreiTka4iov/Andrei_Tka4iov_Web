import AboutMe from "@/components/AboutMe";
import GetStarted from "@/components/GetStarted";
import Intro from "@/components/Intro";
import MyProjects from "@/components/MyProjects";
import { Container, Flex } from "@mantine/core";
import Head from "next/head";

const Home = () => {
  return (
    <Container mt={80} w={"100%"}>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Flex direction={"column"} gap="xl">
        <Intro />
        <AboutMe />
        <MyProjects/>
        <GetStarted />
      </Flex>
    </Container>
  );
};

export default Home;
