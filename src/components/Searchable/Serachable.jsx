import React, { useRef, useState } from "react";

const Serachable = ({ items, itemKeyFn, children }) => {
  const lastChanges = useRef();
  const [search, setSearch] = useState("");
  const searchList = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    if (lastChanges.current) {
      clearTimeout(lastChanges.current);
    }

    lastChanges.current = setTimeout(() => {
      lastChanges.current = null;
      setSearch(e.target.value);
    }, 500);
  };
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchList.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Serachable;
