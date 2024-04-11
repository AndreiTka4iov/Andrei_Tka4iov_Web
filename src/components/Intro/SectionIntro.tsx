"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import GridContainerLine from "./GridContainerLine";
import styles from "./styles.module.css";

const SectionIntro = ({ width = 340 }: { width?: number }) => {
  const { width: screenWidth } = useWindowSize();

  if (screenWidth < 560) return null;

  return (
    <div className={styles.sectionIntro} style={{ width: `${width}px` }}>
      {screenWidth > 840 && (
        <>
          <GridContainerLine dataSide="left" />
          <GridContainerLine dataSide="right" />
        </>
      )}
    </div>
  );
};

export default SectionIntro;
