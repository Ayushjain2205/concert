import React, { useState } from "react";

const Create = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { label: "Register", content: "Content for Register" },
    { label: "Choose plan", content: "Content for Choose plan" },
    { label: "Purchase", content: "Content for Purchase" },
    { label: "Receive Product", content: "Content for Receive Product" },
  ];

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onFinish = () => {
    console.log("Finish Clicked"); // Replace this with your onFinish logic
  };

  return (
    <div className="flex flex-col gap-[20px]">
      <ul className="steps">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step ${currentStep >= index ? "step-primary" : ""}`}
          >
            {step.label}
          </li>
        ))}
      </ul>
      <div className="step-content rounded-xl bg-white p-4 ring ring-indigo-50">
        {steps[currentStep].content}
      </div>
      <div className="navigation-buttons">
        {currentStep > 0 && <button onClick={goPrev}>Previous</button>}
        {currentStep < steps.length - 1 && (
          <button onClick={goNext}>Next</button>
        )}
        {currentStep === steps.length - 1 && (
          <button onClick={onFinish}>Finish</button>
        )}
      </div>
    </div>
  );
};

export default Create;
