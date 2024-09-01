import React, { createContext, useContext } from "react";

const AccordionItem = createContext();

export function useAccordionItem() {
  const ctx = useContext(AccordionItem);

  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion.Item>"
    );
  }
  return ctx;
}

const AccordingItem = ({ id, className, children }) => {
  return (
    <AccordionItem.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItem.Provider>
  );
};

export default AccordingItem;
