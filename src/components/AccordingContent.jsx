import React from "react";
import { useAccordionContext } from "./According";
import { useAccordionItem } from "./AccordingItem";

const AccordingContent = ({ className, children }) => {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItem();
  const isOpen = openItemId === id;
  return (
    <div className={isOpen ? `${className ?? ""} open` : `${className} close`}>
      {children}
    </div>
  );
};

export default AccordingContent;
