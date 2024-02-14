import React from "react";
import { HiOutlineMinus } from "react-icons/hi";
import styles from "./styles.module.css"
import clsx from "clsx";

interface MenuButtonProps {
    open: boolean;
    onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({open, onClick}) => {
  return (
    <button
      className={clsx(styles.menuButton, open && styles.active)}
      onClick={onClick}
    >
      <HiOutlineMinus className={styles.menuFirstLine} />
      <HiOutlineMinus className={styles.menuSecondLine} />
    </button>
  );
};

export default MenuButton;
