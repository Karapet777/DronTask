import React from "react";

const item = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.info}</p>
    </div>
  );
};

export default item;
