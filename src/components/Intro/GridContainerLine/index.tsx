import React from "react";
import styles from "./styles.module.css";

interface GridContainerLineProps {
  dataSide: "left" | "right";
  dataFade?: boolean
}

const GridContainerLine: React.FC<GridContainerLineProps> = ({ dataSide, dataFade = true }) => {
  return <div className={styles.line} data-side={dataSide} data-fade={dataFade}/>;
};

export default GridContainerLine;
