import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import StepItem from "../StepItem";

const Step3 = ({ onSubmit, active }) => {
  const [errors, setErrors] = useState({});
  const [comments, setComments] = useState("");

  const onStepSubmit = () => {
    let errors = {};
    if (!comments) {
      errors.telephoneNumber = "Please Provide a valid Comment";
    }
    if (Object.keys(errors).length === 0) {
      onSubmit({ comments });
    }
    setErrors(errors);
  };
  return (
    <StepItem
      title="Step 3: Final Comments"
      active={active}
      onNextStep={onStepSubmit}
      content={
        <div className="h-full">
          <div className="step-input h-full">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              value={comments}
              onChange={e => {
                setComments(e.target.value.trim());
              }}
            />
            <ErrorMessage message={errors.comments} />
          </div>
        </div>
      }
    />
  );
};

export default Step3;
