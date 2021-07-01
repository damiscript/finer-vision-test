import React from "react";
import Button from "../Button";
import "./index.css";

const StepItem = ({ title, content, active, onNextStep }) => {
  return (
    <div className="step-item">
      <div className="step-title text-white p-2 py-4 rounded-lg">{title}</div>
      <div
        className={`step-body pl-2 pr-4 grid grid-cols-2 overflow-hidden ${
          active ? "normal py-2" : "min-h-0 h-0"
        }`}
      >
        <div className="relative step-content text-black">{content}</div>
        <div className="relative step-action place-self-end flex justify-end">
          <Button
            onClick={() => {
              onNextStep();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StepItem;
