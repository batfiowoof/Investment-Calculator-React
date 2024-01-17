import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid = userInput.duration > 0 && userInput.duration < 1000;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />

      <UserInput onChange={handleChange} userInput={userInput} />
      {!isValid && (
        <p className="center">
          Please enter a valid duration (Greater than 0 and less than 1000)
        </p>
      )}
      {isValid && <Results input={userInput} />}
    </>
  );
}

export default App;
