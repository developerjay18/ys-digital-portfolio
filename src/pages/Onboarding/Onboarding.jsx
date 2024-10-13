import React, { useState } from 'react';
import StepOne from '../../components/Steps/StepOne';
import StepTwo from '../../components/Steps/StepTwo';
import StepThree from '../../components/Steps/StepThree';
import StepFour from '../../components/Steps/StepFour';
import StepFive from '../../components/Steps/StepFive';
import StepSix from '../../components/Steps/StepSix';
import StepSeven from '../../components/Steps/StepSeven';
import StepEight from '../../components/Steps/StepEight';

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({}); // To store all user selections

  // Store the data from each step
  const setSelection = (step, selection) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: selection,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // All steps stored in an array for easy navigation
  const steps = [
    <StepOne
      key={1}
      nextStep={nextStep}
      prevStep={prevStep}
      setSelection={(data) => setSelection(1, data)}
    />,
    <StepTwo
      key={2}
      nextStep={nextStep}
      prevStep={prevStep}
      setSelection={(data) => setSelection(2, data)}
    />,
    <StepThree
      key={3}
      nextStep={nextStep}
      prevStep={prevStep}
      setSelection={(data) => setSelection(3, data)}
    />,
    <StepFour
      key={4}
      nextStep={nextStep}
      prevStep={prevStep}
      setSelection={(data) => setSelection(4, data)}
    />,
    <StepFive
      key={5}
      nextStep={nextStep}
      prevStep={prevStep}
      setSelection={(data) => setSelection(5, data)}
    />,
    <StepSix
      key={6}
      nextStep={nextStep}
      prevStep={prevStep}
      setSelection={(data) => setSelection(6, data)}
    />,
    <StepSeven
      key={7}
      nextStep={nextStep}
      prevStep={prevStep}
      setSelection={(data) => setSelection(7, data)}
    />,
    <StepEight
      key={7}
      nextStep={nextStep}
      prevStep={prevStep}
      setSelection={(data) => setSelection(7, data)}
    />,
  ];

  return (
    <div>
      <header className="font-poppins">
        <div className="black-line text-center bg-black max-h-[8vh] overflow-hidden text-white px-16 py-3 text-2xl font-bold">
          <h1>Grow Your Business Online With Us : Yash Sharma Digital</h1>
        </div>
        <div className="black-line text-center max-h-[8vh] overflow-hidden bg-themeBlue text-white px-16 py-3 text-2xl font-bold italic">
          <h1>Get More Customers, Inquiries, Leads, Visitors & Revenue!</h1>
        </div>
      </header>
      <div className="min-h-[84vh] pt-4">{steps[currentStep]}</div>
    </div>
  );
};

export default OnboardingForm;
