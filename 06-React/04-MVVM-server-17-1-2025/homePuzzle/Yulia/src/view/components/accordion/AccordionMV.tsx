import { useState } from "react";
import { AccordionItemModel } from "../../../model/accordionItemModel";

export function useAccordionViewModel(items: AccordionItemModel[]) {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return {
    items,
    openItemId,
    toggleItem,
  };
}
