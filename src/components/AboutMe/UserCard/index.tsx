import { Card, Image, Text } from "@mantine/core";
import styles from "./styles.module.css";

export function UserCard() {
  return (
    <Card withBorder p={0} radius="md" className={styles.card}>
      <Image src="/me.HEIC" alt="Photo" w={250} maw={"100%"} />
      <div className={styles.bottomBlock}>
        <Text ta="center" fz="md" fw={500} style={styles}>
          Andrei Tkachev
        </Text>

        <Text ta="center" fz="xs" c="dimmed">
          Fullstack developer
        </Text>
      </div>
    </Card>
  );
}
