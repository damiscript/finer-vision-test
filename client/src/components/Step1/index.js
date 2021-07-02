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
      errors.firstName = "Please provide a valid First Name";
    } else if (firstName.length > 50) {
      errors.firstName = "Please provide a shorter first name";
    }
    if (!surname) {
      errors.surname = "Please provide a valid Surname";
    } else if (surname.length > 50) {
      errors.surname = "Please provide a shorter surname";
    }
    if (!email) {
      errors.email = "Please provide a value for Email Address";
    } else {
      var re = /\S+@\S+\.\S+/;
      if (!re.test(email)) {
        errors.email =
          "Please provide a valid Email Address e.g xyz  @mail.com";
      }
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
              maxLength={50}
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
              maxLength={50}
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
              maxLength={255}
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
