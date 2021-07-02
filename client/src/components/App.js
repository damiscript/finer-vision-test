import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createUser } from "../actions";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Button from "./Button";
import UserList from "./UserList";
import "./App.css";
function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  /**
   * Updates the step by 1 every step until the final step where it is submitted to the database
   */
  const onStepSubmit = data => {
    if (step < 0) {
      return;
    }
    const currentData = {
      ...userData,
      ...data
    };
    setUserData(currentData);
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(-999999);
      createUser(currentData);
    }
  };

  const renderNextButton = () => {
    if (step < 0) {
      return (
        <Link to="/users">
          <Button text="View Users >" />
        </Link>
      );
    }
  };
  return (
    <div className="App">
      <main className="container w-full">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <div className="bg-white flex flex-col space-y-1 rounded p-1 mb-2">
                <Step1 active={step === 1} onSubmit={onStepSubmit} />
                <Step2 active={step === 2} onSubmit={onStepSubmit} />
                <Step3 active={step === 3} onSubmit={onStepSubmit} />
              </div>
              {renderNextButton()}
            </Route>
            <Route path="/users" exact>
              <UserList />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
