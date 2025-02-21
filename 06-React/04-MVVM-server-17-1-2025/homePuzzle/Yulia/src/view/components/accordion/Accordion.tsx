import React from "react";
import { useAccordionViewModel } from "./AccordionMV";
import { AccordionItemModel } from "../../../model/accordionItemModel";
import styles from "./Accordion.module.scss";

interface AccordionViewProps {
  items: AccordionItemModel[];
}

const AccordionView: React.FC<AccordionViewProps> = ({ items }) => {
  const { openItemId, toggleItem } = useAccordionViewModel(items);

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionHeader}>Settings</div>
      {items.map((item) => (
        <div key={item.id} className={styles.accordionItem}>
          <span className={styles.accordionLabel}>{item.title}</span>
          <div
            className={`${styles.accordionToggle} ${
              openItemId === item.id ? styles.active : ""
            }`}
            onClick={() => toggleItem(item.id)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default AccordionView;
