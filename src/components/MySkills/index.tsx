import { Flex, Title } from "@mantine/core";
import styles from './styles.module.css'

const MySkills = () => {
    return (  <div className={styles.wrapper}>
        <Flex justify={"space-between"} align={"center"}>
          <Title order={1} className={styles.title}>
            Skills
          </Title>
        </Flex>

      </div> );
}
 
export default MySkills;