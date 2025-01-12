import React from "react";
import { HiOutlineMinus } from "react-icons/hi";
import styles from "./styles.module.css";
import clsx from "clsx";
import { Burger } from "@mantine/core";

interface MenuButtonProps {
  open: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ open, onClick }) => {
  return (
    <Burger opened={open} onClick={onClick} />
  );
};

export default MenuButton;
