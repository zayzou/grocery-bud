import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;
