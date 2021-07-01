import React from "react";
import "./index.css";
const Button = ({ onClick }) => {
  return (
    <button
      className="button text-black px-12 py-2 rounded-lg text-white"
      onClick={onClick}
    >
      Next {">"}
    </button>
  );
};

export default Button;
