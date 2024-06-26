import { Flex, Title } from "@mantine/core";
import styles from "./styles.module.css";
const EducationComponent = () => {
  return (
    <Flex gap={16} w={"100%"} className={styles.wrapper}>
      <Flex gap={12} direction={"column"} className={styles.text}>
        <Title order={1} className={styles.title}>
          Education
        </Title>
      </Flex>
    </Flex>
  );
};

export default EducationComponent;
