import { data } from "@/types/projects";
import { FC } from "react";
import styles from "./styles.module.css";
import { Badge, Button, Flex, Group, Image, Text } from "@mantine/core";
import { useWindowSize } from "@/hooks/useWindowSize";

interface ListProps {
  item: data;
}

const ListItem: FC<ListProps> = ({ item }) => {
  const isSmall = useWindowSize().width < 550;
  return (
    <div className={styles.item}>
      <Flex gap={isSmall ? 20 : 8} direction={isSmall ? "column" : "row"}>
        <Flex
          direction={"column"}
          w={isSmall ? "100%" : 130}
          align={"center"}
          gap={8}
        >
          <Image
            src={item.image}
            alt={item.title}
            w={130}
            p={item.padding}
            fit="contain"
          />
          {!isSmall && (
            <Button
              radius="md"
              size={"xs"}
              variant="filled"
              color="#0072ff"
              w={"100%"}
              component="a"
              href={item.href}
              disabled={!item.href}
            >
              View Project
            </Button>
          )}
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
        {isSmall && (
          <Button
            radius="md"
            size={"xs"}
            variant="filled"
            color="#0072ff"
            w={"100%"}
            component="a"
            href={item.href}
            disabled={!item.href}
          >
            View Project
          </Button>
        )}
      </Flex>
    </div>
  );
};

export default ListItem;
