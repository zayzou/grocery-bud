import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItems }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          {...item}
          removeItem={removeItem}
          editItems={editItems}
        />
      ))}
    </div>
  );
};

export default Items;
