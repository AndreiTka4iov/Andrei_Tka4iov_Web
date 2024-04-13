import GetStarted from "@/components/GetStarted";
import Intro from "@/components/Intro";
import { Container } from "@mantine/core";
import Head from "next/head";

const Home = () => {
  return (
    <Container mt={80}>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Intro />
      <GetStarted />
    </Container>
  );
};

export default Home;
