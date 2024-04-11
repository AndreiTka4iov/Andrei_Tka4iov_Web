"use client";
import { Box, Container, Flex, Text, Title } from "@mantine/core";
import styles from "./styles.module.css";
import GridContainerLine from "./GridContainerLine";
import SectionIntro from "./SectionIntro";
import clsx from "clsx";
import ActionButtons from "./ActionButtons";
import { useAppSelector } from "@/hooks/redux";

const Intro = () => {
  const { bottomSectionWidth } = useAppSelector((state) => state.homeSlice);
  return (
    <Container className={styles.container}>
      <GridContainerLine dataSide="left" />
      <GridContainerLine dataSide="right" />
      <Flex direction={"column"} align={"center"}>
        <SectionIntro width={bottomSectionWidth}/>
        <Flex
          direction={"column"}
          align={"center"}
          className={styles.bodyIntro}
        >
          <Title order={1} p={24} className={clsx(styles.title, styles.after)}>
            Full stack web developer's portfolio
          </Title>
          <Box className={styles.after} p={"32 24"}>
            <p className={styles.descr}>
              Hello, my name is Andrei Tkachev. You are looking at my portfolio.
              To contact me, please use one of the proposed options.
            </p>
          </Box>
          <ActionButtons />
          <SectionIntro width={bottomSectionWidth}/>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Intro;
