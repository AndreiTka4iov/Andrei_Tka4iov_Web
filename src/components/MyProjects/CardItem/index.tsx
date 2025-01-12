import {
  Card,
  Image,
  Group,
  Text,
  Badge,
  Button,
  Flex,
  ScrollArea,
} from "@mantine/core";
import styles from "./styles.module.css";
import { data } from "@/types/projects";
import { FC } from "react";
import clsx from "clsx";

interface CardProps {
  item: data;
}

const CardItem: FC<CardProps> = ({ item }) => {
  return (
    <Card
      radius="md"
      p="md"
      className={styles.card}
      key={item.id}
      
    >
      <Card.Section>
        <Image
          src={item.image}
          alt={item.title}
          w={'100%'}
          h={180}
          p={item.padding}
          fit="contain"
        />
      </Card.Section>
      <Card.Section className={styles.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={600}>
            {item.title}
          </Text>
          <Badge size="sm" variant="light">
            {item.tag}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs" c={'gray'}>
          {item.desc}
        </Text>
      </Card.Section>
      <Card.Section
        className={clsx(styles.section, styles.bordered)}
        mt={"auto"}
      >
        <Text mt="md" className={styles.label} c="dimmed">
          Stack
        </Text>
        <ScrollArea scrollbarSize={0}>
          <Flex gap={7} mt={5} w={"fit-content"}>
            {item.badges.map((el) => (
              <Badge variant="filled" key={el.label} color={el.color}>
                {el.label}
              </Badge>
            ))}
          </Flex>
        </ScrollArea>
        <Group mt="xs">
          <Button
            radius="md"
            variant="filled"
            color="#0072ff"
            w={"100%"}
            component="a"
            href={item.href}
            disabled={!item.href}
          >
            View Project
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default CardItem;
