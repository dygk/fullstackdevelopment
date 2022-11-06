import React from "react";

const Total = (props) => {
  const total = props.items.reduce((sum, item) => sum + item.exerciseNo, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

export default Total;
