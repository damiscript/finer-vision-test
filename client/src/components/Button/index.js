import React from "react";
import "./index.css";
const Button = ({ text, onClick }) => {
  return (
    <button
      className="button text-black px-12 py-2 rounded-lg text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Next >"
};

export default Button;
