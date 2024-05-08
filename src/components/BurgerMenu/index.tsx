import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { globalSlice } from "@/store/global/globalSlice";
import { Flex, UnstyledButton, rem } from "@mantine/core";
import { FaUser } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { IoIosCodeWorking } from "react-icons/io";
import { FaWpforms } from "react-icons/fa";

import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const BurgerMenu = () => {
  const dispatch = useAppDispatch();
  const { toggleBurgerMenu, toggleContactModal } = globalSlice.actions;
  const { burgerMenu } = useAppSelector((state) => state.globalSlice);

  return (
    <div className={clsx(styles.menu, burgerMenu && styles.show)}>
      <span className={styles.nameTag}>Navigation</span>
      <Link
        href={"/"}
        className={styles.links}
        onClick={() => dispatch(toggleBurgerMenu())}
      >
        <IoMdHome className={styles.icon} />
        <Flex className={styles.text}>
          Home <IoIosArrowRoundForward className={styles.linkIcon} />
        </Flex>
      </Link>
      <Link
        href={"/about"}
        className={styles.links}
        onClick={() => dispatch(toggleBurgerMenu())}
      >
        <FaUser className={styles.icon} />
        <Flex className={styles.text}>
          About Me <IoIosArrowRoundForward className={styles.linkIcon} />
        </Flex>
      </Link>
      <Link
        href={"/projects"}
        className={styles.links}
        onClick={() => dispatch(toggleBurgerMenu())}
      >
        <IoGrid className={styles.icon} />
        <Flex className={styles.text}>
          Projects <IoIosArrowRoundForward className={styles.linkIcon} />
        </Flex>
      </Link>
      <Link
        href={"/education"}
        className={styles.links}
        onClick={() => dispatch(toggleBurgerMenu())}
      >
        <FaUniversity className={styles.icon} />
        <Flex className={styles.text}>
          Education <IoIosArrowRoundForward className={styles.linkIcon} />
        </Flex>
      </Link>
      <Link
        href={"/skills"}
        className={styles.links}
        onClick={() => dispatch(toggleBurgerMenu())}
      >
        <FaBrain className={styles.icon} />
        <Flex className={styles.text}>
          Skills <IoIosArrowRoundForward className={styles.linkIcon} />
        </Flex>
      </Link>
      <Link
        href={"/experience"}
        className={styles.links}
        onClick={() => dispatch(toggleBurgerMenu())}
      >
        <IoIosCodeWorking className={styles.icon} />
        <Flex className={styles.text}>
          Experience <IoIosArrowRoundForward className={styles.linkIcon} />
        </Flex>
      </Link>
      <span className={styles.nameTag}>Contact</span>
      <UnstyledButton
        className={styles.links}
        onClick={() => {
          dispatch(toggleBurgerMenu());
          dispatch(toggleContactModal());
        }}
      >
        <FaWpforms className={styles.icon} />
        <Flex className={styles.text}>Contact Form</Flex>
      </UnstyledButton>
      <a
        href="https://t.me/tcka4"
        target="_blank"
        rel="noreferrer"
        className={styles.links}
      >
        <FaTelegramPlane className={styles.icon} />
        <Flex className={styles.text}>
          tcka4 <IoIosArrowRoundForward className={styles.linkIcon} />
        </Flex>
      </a>
      <a
        href="mailto:andrei.tkachiov@gmail.com"
        target="_blank"
        rel="noreferrer"
        className={styles.links}
      >
        <IoMdMail className={styles.icon} />
        <Flex className={styles.text}>
          andrei.tkachiov@gmail.com{" "}
          <IoIosArrowRoundForward className={styles.linkIcon} />
        </Flex>
      </a>
      <a
        href="https://github.com/AndreiTka4iov"
        target="_blank"
        rel="noreferrer"
        className={styles.links}
      >
        <FaGithub className={styles.icon} />
        <Flex className={styles.text}>
          AndreiTka4iov <IoIosArrowRoundForward className={styles.linkIcon} />
        </Flex>
      </a>
    </div>
  );
};

export default BurgerMenu;
