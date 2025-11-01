import React from "react";

const Button = (props) => {
  return (
    <div className="flex justify-center items-center gap-4  ">
      <button
        className="px-5 py-2 bg-amber-400 text-black rounded-2xl cursor-pointer active:scale-95"
        onClick={() => {
          if (props.index > 1) {
            props.setIndex(props.index - 1);
            props.setUserdata([]);
          }
        }}>
        Prev
      </button>

      <h2>Page {props.index}</h2>

      <button
        className="px-5 py-2 bg-amber-400 text-black rounded-2xl cursor-pointer active:scale-95"
        onClick={() => {
          props.setIndex(props.index + 1);
          props.setUserdata([]);
        }}>
        Next
      </button>
    </div>
  );
};

export default Button;
