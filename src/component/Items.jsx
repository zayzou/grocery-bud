import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, handleCompleted }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          {...item}
          removeItem={removeItem}
          handleCompleted={handleCompleted}
        />
      ))}
    </div>
  );
};

export default Items;
