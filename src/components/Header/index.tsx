import { Box, Button, Flex, Text } from "@mantine/core";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "../Button/MenuButton";
import { useWindowSize } from "@/hooks/useWindowSize";
import NavLinks from "./NavLinks";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { globalSlice } from "@/store/global/globalSlice";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  const dispatch = useAppDispatch();
  const { burgerMenu } = useAppSelector((state) => state.globalSlice);
  const { toggleContactModal, toggleBurgerMenu } = globalSlice.actions;
  const toggleModal = () => dispatch(toggleContactModal());

  return (
    <header className={styles.header}>
      <section className={styles.headerSection}>
        <Link href={"/"} className={styles.logo}>
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
                gradient={{ from: "indigo", to: "#6350d8", deg: 45 }}
                radius="md"
                className={styles.button}
                onClick={toggleModal}
              >
                Contact Me
              </Button>
            )}
            <MenuButton
              open={burgerMenu}
              onClick={() => dispatch(toggleBurgerMenu())}
            />
          </Flex>
        ) : (
          <NavLinks toggleModal={toggleModal} />
        )}
      </section>
    </header>
  );
};

export default Header;
