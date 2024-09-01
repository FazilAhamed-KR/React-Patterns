import React, { createContext, useContext, useState } from "react";
import AccordingItem from "./AccordingItem";
import AccordingTitle from "./AccordingTitle";
import AccordingContent from "./AccordingContent";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>"
    );
  }
  return ctx;
}
const According = ({ className, children }) => {
  const [openItemId, setOpenItemId] = useState();

  function toggleId(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleId,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

export default According;

According.Item = AccordingItem;
According.Title = AccordingTitle;
According.Content = AccordingContent;
