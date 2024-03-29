import { Box, Button, Flex, defaultVariantColorsResolver } from "@mantine/core";
import styles from "./styles.module.css";
import GridContainerLine from "./GridContainerLine";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { homeSlice } from "@/store/home/homeSlice";

const ActionButtons = () => {
  const dispatch = useAppDispatch()
  const {setBottomSectionWidth} = homeSlice.actions
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(!ref.current) return
    dispatch(setBottomSectionWidth(ref.current.clientWidth))
  }, [ref, ref.current])
  return (
    <Box className={styles.after}>
      <Box className={styles.sectionACtionButton} ref={ref}>
        <GridContainerLine dataSide="left" />
        <Flex gap={16}>
          <Button variant={"filled"} color="violet" size="md" radius={"md"}> Get Started</Button>
          <Button variant={"outline"} color="gray" size="md" radius={"md"}> Lern Portfolio</Button>
        </Flex>
        <GridContainerLine dataSide="right" />
      </Box>
    </Box>
  );
};

export default ActionButtons;
