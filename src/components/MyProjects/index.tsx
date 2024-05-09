import {
  Flex,
  Title,
  Card,
  Image,
  Group,
  Text,
  Badge,
  Button,
} from "@mantine/core";
import styles from "./styles.module.css";
import { useAppSelector } from "@/hooks/redux";
import { useWindowSize } from "@/hooks/useWindowSize";

const MyProjects = () => {
  const { data } = useAppSelector((state) => state.projectsSlice);

  const less729px = useWindowSize().width < 729;

  return (
    <div className={styles.wrapper}>
      <Title order={1} className={styles.title}>
        Projects
      </Title>
      <Flex
        wrap={"wrap"}
        gap={16}
        mt={16}
        justify={less729px ? "center" : "start"}
      >
        {data.map((item) => (
          <Card
            withBorder
            radius="md"
            p="md"
            className={styles.card}
            key={item.id}
            w={330}
            h={463}
          >
            <Card.Section>
              <Image
                src={item.image}
                alt={item.title}
                w={330}
                h={180}
                p={item.padding}
                fit="contain"
              />
            </Card.Section>
            <Card.Section className={styles.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>
                  {item.title}
                </Text>
                <Badge size="sm" variant="light">
                  {item.tag}
                </Badge>
              </Group>
              <Text fz="sm" mt="xs">
                {item.desc}
              </Text>
            </Card.Section>
            <Card.Section className={styles.section}>
              <Text mt="md" className={styles.label} c="dimmed">
                Stack
              </Text>
              <Group gap={7} mt={5}>
                {item.badges.map((el) => (
                  <Badge variant="filled" key={el.label} color={el.color}>
                    {el.label}
                  </Badge>
                ))}
              </Group>
              <Group mt="xs">
                <Button
                  radius="md"
                  variant="filled"
                  color="violet"
                  w={"100%"}
                  component="a"
                  href={item.href}
                >
                  Go to work
                </Button>
              </Group>
            </Card.Section>
          </Card>
        ))}
      </Flex>
    </div>
  );
};

export default MyProjects;
