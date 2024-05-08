import React from "react";
import { Stack } from "@mantine/core";
import Header from "../Header";
import { Roboto } from "next/font/google";
import clsx from "clsx";
import styles from "./styles.module.css";
import Footer from "../Footer";
import BurgerMenu from "../BurgerMenu";
import { useAppSelector } from "@/hooks/redux";

interface LayoutProps {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Layout = ({ children }: LayoutProps) => {
  const { burgerMenu, contactModal } = useAppSelector(
    (state) => state.globalSlice
  );
  return (
    <main
      className={clsx(
        roboto.className,
        styles.screenWrapper,
        (contactModal || burgerMenu) && styles.scrollHidden
      )}
    >
      <Header />
      <BurgerMenu />
      <Stack p={10}>{children}</Stack>
      <Footer />
    </main>
  );
};

export default Layout;
