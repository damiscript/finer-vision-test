import React, { useState } from "react";
import { fetchUsers, createUser } from "../actions";
import "./App.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  /**
   * Updates the step by 1 every step until the final step where it is submitted to the database
   */
  const onStepSubmit = data => {
    const currentData = {
      ...userData,
      ...data
    };
    setUserData(currentData);
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(999999);
      createUser(currentData);
    }
  };

  return (
    <div className="App">
      <main className="container w-full">
        <div className="bg-white flex flex-col space-y-1 rounded p-1">
          <Step1 active={step === 1} onSubmit={onStepSubmit} />
          <Step2 active={step === 2} onSubmit={onStepSubmit} />
          <Step3 active={step === 3} onSubmit={onStepSubmit} />
        </div>
      </main>
    </div>
  );
}

export default App;
