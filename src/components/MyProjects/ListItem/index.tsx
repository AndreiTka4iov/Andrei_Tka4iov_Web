import { data } from "@/types/projects";
import { FC } from "react";
import styles from "./styles.module.css";
import { Badge, Button, Flex, Group, Image, Text } from "@mantine/core";

interface ListProps {
  item: data;
}

const ListItem: FC<ListProps> = ({ item }) => {
  return (
    <div className={styles.item}>
      <Flex gap={8}>
        <Flex direction={"column"} w={130} gap={8}>
          <Image
            src={item.image}
            alt={item.title}
            w={130}
            p={item.padding}
            fit="contain"
          />
          <Button
            radius="md"
            size={"xs"}
            variant="filled"
            color="violet"
            w={"100%"}
            component="a"
            href={item.href}
          >
            To project page
          </Button>
        </Flex>
        <Flex direction={"column"}>
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {item.title}
            </Text>
            <Badge size="sm" variant="light">
              {item.tag}
            </Badge>
          </Group>
          <Group gap={7} mt={5}>
            {item.badges.map((el) => (
              <Badge variant="filled" key={el.label} color={el.color}>
                {el.label}
              </Badge>
            ))}
          </Group>
          <Text fz="sm" mt="xs" c={"gray"}>
            {item.desc}
          </Text>
          
        </Flex>
      </Flex>
    </div>
  );
};

export default ListItem;
