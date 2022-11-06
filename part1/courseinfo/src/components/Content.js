import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    
      props.items.map((part) => (
        <Part partNo={part.partNo} exerciseNo={part.exerciseNo} />
      ))
    
  );
};

export default Content;
