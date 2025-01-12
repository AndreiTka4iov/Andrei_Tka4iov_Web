import { Flex, Title } from "@mantine/core";
import styles from "./styles.module.css";
import { useAppSelector } from "@/hooks/redux";
import { useWindowSize } from "@/hooks/useWindowSize";
import FloatingIndicatorComponent from "../FloatingIndicatiorComponent";
import { CiBoxList } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import CardItem from "./CardItem";
import { useState } from "react";
import ListItem from "./ListItem";

const MyProjects = () => {
  const [listType, setListType] = useState<number>(0);
  const { data } = useAppSelector((state) => state.projectsSlice);
  const less729px = useWindowSize().width < 729;

  return (
    <div className={styles.wrapper} id="projects">
      <Flex justify={"space-between"} align={"center"}>
        <h2 className={styles.subheading}>Projects</h2>
        <FloatingIndicatorComponent
          items={[
            { label: "1", icon: <CiGrid41 size={16} /> },
            { label: "2", icon: <CiBoxList size={16} /> },
          ]}
          selected={(index) => setListType(index)}
        />
      </Flex>

      {listType === 0 ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <CardItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <Flex
          wrap={"wrap"}
          gap={16}
          mt={16}
          justify={less729px ? "center" : "start"}
        >
          {data.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </Flex>
      )}
    </div>
  );
};

export default MyProjects;
