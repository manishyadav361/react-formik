import React from "react";

const example1 = () => {
  const clickMe = () => {
    alert("you clicked me!!");
  };
  return (
    <div>
      <button onClick={clickMe}>click me </button>
    </div>
  );
};

export default example1;
