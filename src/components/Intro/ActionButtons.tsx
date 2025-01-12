import { Box, Button, Flex } from "@mantine/core";
import styles from "./styles.module.css";
import GridContainerLine from "./GridContainerLine";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { homeSlice } from "@/store/home/homeSlice";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Link } from "react-scroll";

const ActionButtons = () => {
  const dispatch = useAppDispatch();
  const { setBottomSectionWidth } = homeSlice.actions;
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!ref.current) return;
    dispatch(setBottomSectionWidth(ref.current.clientWidth));
  }, [ref, ref.current]);

  return (
    <Box className={styles.after}>
      <Box className={styles.sectionACtionButton} ref={ref}>
        {width > 840 && <GridContainerLine dataSide="left" />}
        <Flex gap={16}>
          <Link to="Get_started" smooth={true} offset={-64} duration={500}>
            <Button variant={"filled"} color="#0072ff" size="md" radius={"md"}>
              {" "}
              Get Started
            </Button>
          </Link>
        </Flex>
        {width > 840 && <GridContainerLine dataSide="right" />}
      </Box>
    </Box>
  );
};

export default ActionButtons;
