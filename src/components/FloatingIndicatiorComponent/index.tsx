import { FloatingIndicator, UnstyledButton } from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface FloatingIndicatorComponentProps {
  items: item[];
  selected: (index: number) => void;
}

interface item {
  label?: string;
  icon?: React.ReactNode;
}

const FloatingIndicatorComponent: React.FC<FloatingIndicatorComponentProps> = ({
  items: data,
  selected,
}) => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    selected(active);
  }, [active]);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      key={index}
      className={styles.control}
      ref={setControlRef(index)}
      onClick={() => setActive(index)}
      mod={{ active: active === index }}
    >
      {
        <span className={styles.controlLabel}>
          {item.icon ? item.icon : item.label}
        </span>
      }
    </UnstyledButton>
  ));

  return (
    <div ref={setRootRef} className={styles.root}>
      {controls}
      <FloatingIndicator
        target={controlsRefs[active]}
        className={styles.indicator}
        parent={rootRef}
      />
    </div>
  );
};

export default FloatingIndicatorComponent;
