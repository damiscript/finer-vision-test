import React, { useState } from "react";
import StepItem from "../StepItem";
import ErrorMessage from "../ErrorMessage";
const Step1 = ({ onSubmit, active }) => {
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const onStepSubmit = () => {
    let errors = {};

    if (!firstName) {
      errors.firstName = "Please Provide a valid First Name";
    }
    if (!surname) {
      errors.surname = "Please Provide a valid Surname";
    }
    if (!email) {
      errors.email = "Please Provide a valid Email Address";
    }

    if (Object.keys(errors).length === 0) {
      onSubmit({ firstName, surname, email });
    }
    setErrors(errors);
  };
  return (
    <StepItem
      title="Step 1: Your Details"
      onNextStep={onStepSubmit}
      active={active}
      content={
        <div className="grid grid-cols-2">
          <div className="step-input">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value.trim());
              }}
            />
            <ErrorMessage message={errors.firstName} />
          </div>
          <div className="step-input">
            <label htmlFor="surname">Surname</label>
            <input
              id="surname"
              type="text"
              value={surname}
              onChange={e => {
                setSurname(e.target.value.trim());
              }}
            />
            <ErrorMessage message={errors.surname} />
          </div>
          <div className="step-input">
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={e => {
                setEmail(e.target.value.trim());
              }}
            />
            <ErrorMessage message={errors.email} />
          </div>
        </div>
      }
    />
  );
};

export default Step1;
