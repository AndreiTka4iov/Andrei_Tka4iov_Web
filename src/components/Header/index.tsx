import { Button, Flex, Image } from "@mantine/core";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "../Button/MenuButton";
import { useWindowSize } from "@/hooks/useWindowSize";
import NavLinks from "./NavLinks";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        <Image
          src={"/logo.svg"}
          alt={"logo"}
          height={32}
          className={styles.logoImage}
        />
      </Link>
      {width < 840 ? (
        <Flex gap={12} align={"center"}>
          {width > 530 && (
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "#6350d8", deg: 45 }}
              radius="md"
              className={styles.button}
            >
              Contact Me
            </Button>
          )}
          <MenuButton open={open} onClick={() => setOpen(!open)} />
        </Flex>
      ) : (
        <NavLinks />
      )}
    </header>
  );
};

export default Header;
