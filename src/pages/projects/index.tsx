import MyProjects from "@/components/MyProjects";
import { Container } from "@mantine/core";
import Head from "next/head";

const Projects = () => {
  return (
    <Container mt={80} mb={40} w={"100%"}>
      <Head>
        <title>Projects</title>
      </Head>
      <MyProjects/>
    </Container>
  );
};

export default Projects;
