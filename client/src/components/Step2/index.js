import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import StepItem from "../StepItem";

const Step2 = ({ onSubmit, active }) => {
  const [errors, setErrors] = useState({});
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [dobDay, setDobDay] = useState(23);
  const [dobMonth, setDobMonth] = useState(12);
  const [dobYear, setDobYear] = useState(1960);

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const onStepSubmit = () => {
    let errors = {};
    const date = new Date();
    const currentYear = date.getFullYear();

    if (!telephoneNumber) {
      errors.telephoneNumber = "Please provide a valid Telephone Number";
    }
    if (!gender) {
      errors.gender = "Please provide a valid Gender";
    }
    if (!dobDay) {
      errors.dobDay = "Please provide a valid Day for your Date Of Birth";
    }
    if (!dobMonth) {
      errors.dobMonth = "Please provide a valid Month for your Date Of Birth";
    } else if (!dobMonth > 12) {
      errors.dobMonth =
        "Please provide a month with a value less than 12 i.e december";
    }
    if (!dobYear) {
      errors.dobYear = "Please provide a valid Year for your Date Of Birth";
    } else if (dobYear > currentYear) {
      errors.dobYear =
        "Please select a valid date as you cannot be born in the future";
    }
    if (dobDay && dobMonth && dobYear) {
      const numberOfDays = daysInMonth(dobMonth, dobYear);
      if (dobDay > numberOfDays) {
        errors.dobDay =
          "Please provide a day less than the amount of days of the month" +
          numberOfDays;
      }
    }

    if (Object.keys(errors).length === 0) {
      const dateOfBirth = `${dobYear}/${dobMonth}/${dobDay}`;
      onSubmit({ telephoneNumber, gender, dateOfBirth });
    }
    setErrors(errors);
  };
  return (
    <StepItem
      title="Step 2: More Comments"
      active={active}
      onNextStep={onStepSubmit}
      content={
        <div className="grid grid-cols-2">
          <div className="step-input">
            <label htmlFor="telephone-number">Telephone Number</label>
            <input
              id="telephone-number"
              value={telephoneNumber}
              type="number"
              onChange={e => {
                setTelephoneNumber(e.target.value.trim());
              }}
            />
            <ErrorMessage message={errors.telephoneNumber} />
          </div>
          <div className="step-input">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              onChange={e => {
                setGender(e.target.value);
              }}
              value={gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="-">Rather Not Say</option>
            </select>
            <ErrorMessage message={errors.gender} />
          </div>
          <div className="step-input">
            <label>Date Of Birth</label>
            <div className="grid grid-cols-3">
              <input
                type="number"
                value={dobDay}
                className="step-input-sm"
                onChange={e => {
                  if (e.target.value.length > 2) {
                    return;
                  }
                  //Clamp Day as long as the user is not clearing the input
                  if (e.target.value) {
                    if (e.target.value < 1) {
                      e.target.value = 1;
                    } else if (e.target.value > 31) {
                      e.target.value = 31;
                    }
                  }
                  setDobDay(e.target.value);
                }}
              />
              <input
                type="number"
                value={dobMonth}
                className="step-input-sm"
                max="12"
                min="1"
                onChange={e => {
                  if (e.target.value.length > 2) {
                    return;
                  }
                  //Clamp Month as long as the user is not clearing the input
                  if (e.target.value) {
                    if (e.target.value < 1) {
                      e.target.value = 1;
                    } else if (e.target.value > 12) {
                      e.target.value = 12;
                    }
                  }

                  setDobMonth(e.target.value);
                }}
              />
              <input
                type="number"
                value={dobYear}
                className="step-input-sm"
                onChange={e => {
                  if (e.target.value.length > 4) {
                    return;
                  } else if (e.target.value < 1960) {
                    e.target.value = 1960;
                  }
                  setDobYear(e.target.value);
                }}
              />
            </div>
            <ErrorMessage message={errors.dobDay} />
            <ErrorMessage message={errors.dobMonth} />
            <ErrorMessage message={errors.dobYear} />
          </div>
        </div>
      }
    />
  );
};

export default Step2;
