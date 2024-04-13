import { Box, Button, Flex, Menu } from "@mantine/core";
import styles from "./styles.module.css";
import GridContainerLine from "./GridContainerLine";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { homeSlice } from "@/store/home/homeSlice";
import { useWindowSize } from "@/hooks/useWindowSize";
import { SiAboutdotme } from "react-icons/si";
import { BiGitRepoForked } from "react-icons/bi";
import { LiaUniversitySolid } from "react-icons/lia";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";

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
          <Button variant={"filled"} color="violet" size="md" radius={"md"} component="a" href="#wrapper">
            {" "}
            Get Started
          </Button>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button variant={"outline"} color="gray" size="md" radius={"md"}>
                {" "}
                Learn Portfolio
              </Button>
            </Menu.Target>

            <Menu.Dropdown bg={'#111'}>
              <Menu.Label>Learn Portfolio</Menu.Label>
              <Menu.Item
                leftSection={<SiAboutdotme />}
                component="a"
                href="/about"
              >
                About me
              </Menu.Item>
              <Menu.Item
                leftSection={<BiGitRepoForked />}
                component="a"
                href="/projects"
              >
                Projects
              </Menu.Item>
              <Menu.Item
                leftSection={<LiaUniversitySolid />}
                component="a"
                href="/education"
              >
                Education
              </Menu.Item>
              <Menu.Item leftSection={<GiSkills />} component="a" href="/skils">
                Skills
              </Menu.Item>
              <Menu.Item
                leftSection={<MdOutlineWorkHistory />}
                component="a"
                href="/experience"
              >
                Experience
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Flex>
        {width > 840 && <GridContainerLine dataSide="right" />}
      </Box>
    </Box>
  );
};

export default ActionButtons;
