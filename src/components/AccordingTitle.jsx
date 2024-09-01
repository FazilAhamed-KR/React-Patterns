import React from "react";
import { useAccordionContext } from "./According";
import { useAccordionItem } from "./AccordingItem";

const AccordingTitle = ({ className, children }) => {
  const { toggleId } = useAccordionContext();
  const id = useAccordionItem();
  return (
    <h3 className={className} onClick={() => toggleId(id)}>
      {children}
    </h3>
  );
};

export default AccordingTitle;
