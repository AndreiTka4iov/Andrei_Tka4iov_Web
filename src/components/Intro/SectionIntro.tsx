"use client"
import GridContainerLine from "./GridContainerLine";
import styles from "./styles.module.css";

const SectionIntro = ({width = 340}: {width?: number}) => {
  return (
    <div className={styles.sectionIntro} style={{ width: `${width}px`}}>
      <GridContainerLine dataSide="left" />
      <GridContainerLine dataSide="right" />
    </div>
  );
};

export default SectionIntro;
