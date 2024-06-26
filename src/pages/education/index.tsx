import EducationComponent from "@/components/EducationComponent";
import { Container } from "@mantine/core";
import Head from "next/head";

const Education = () => {
  return (
    <div>
      <Container mt={80} w={"100%"}>
        <Head>
          <title>Education</title>
        </Head>
        <EducationComponent />
      </Container>
    </div>
  );
};

export default Education;
