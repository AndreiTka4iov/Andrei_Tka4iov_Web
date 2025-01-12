import { Box, Button, Flex, Text } from "@mantine/core";
import styles from "./styles.module.css";

import MenuButton from "../Button/MenuButton";
import { useWindowSize } from "@/hooks/useWindowSize";
import NavLinks from "./NavLinks";
import { useModal } from "@/hooks/modals/useModal";
import { Link } from "react-scroll";

const Header = () => {
  const { width } = useWindowSize();
  const { status, toggleModal } = useModal("burger");

  return (
    <header className={styles.header}>
      <section className={styles.headerSection}>
        <Link
          to={"home"}
          smooth={true}
          offset={-200}
          duration={500}
          className={styles.logo}
        >
          <Text size={"lg"} color="#888">
            /
          </Text>
          <Box className={styles.homeBtn}>
            <Text className={styles.text} size="lg" fw={600}>
              Portfolio
            </Text>
          </Box>
        </Link>
        {width < 840 ? (
          <Flex gap={12} align={"center"}>
            {width > 530 && (
              <Button
                variant="gradient"
                gradient={{ from: "#00c6ff", to: "#0072ff", deg: 45 }}
                radius="md"
                className={styles.button}
                onClick={() => toggleModal("contact")}
              >
                Contact Me
              </Button>
            )}
            <MenuButton open={status} onClick={() => toggleModal()} />
          </Flex>
        ) : (
          <NavLinks toggleModal={() => toggleModal("contact")} />
        )}
      </section>
    </header>
  );
};

export default Header;
