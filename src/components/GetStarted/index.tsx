import { Flex, Text, Title } from "@mantine/core";
import styles from "./styles.module.css";

const GetStarted = () => {
  return (
    <div className={styles.wrapper} id="wrapper">
      <Title className={styles.title}>
        How do you get started working with me?
      </Title>
      <Text className={styles.text}>
        After reviewing my portfolio, do you have questions, need help, or have
        a job offer? Please use one of the following methods to contact me.
      </Text>
      <Flex wrap={"wrap"} align={"center"} mt={32}>
        
      </Flex>
    </div>
  );
};

export default GetStarted;
