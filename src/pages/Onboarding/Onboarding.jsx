import React, { useState } from 'react';
import StepOne from '../../components/Steps/StepOne';
import StepTwo from '../../components/Steps/StepTwo';
import StepThree from '../../components/Steps/StepThree';
import StepFour from '../../components/Steps/StepFour';
import StepFive from '../../components/Steps/StepFive';
import StepSix from '../../components/Steps/StepSix';
import StepSeven from '../../components/Steps/StepSeven';
import StepEight from '../../components/Steps/StepEight';
import StepNine from '../../components/Steps/StepNine';
import { useDispatch, useSelector } from 'react-redux';
import {
  enterrunAdsBefore,
  enterBusinessType,
  enterBusinessDescription,
  enterSelectedOptions,
} from '../../store/joinSlice';

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.join);

  // Store the data from each step
  const setSelection = (step, selection) => {
    console.log(selection);
    if (step === 2) {
      console.log(selection, 'from onboarding');
      dispatch(enterrunAdsBefore(selection));
    } else if (step === 3) {
      dispatch(enterBusinessType(selection));
    } else if (step === 4) {
      dispatch(enterBusinessDescription(selection));
    } else if (step === 7) {
      console.log(selection);
      dispatch(
        enterSelectedOptions({
          googleMyBusiness: selection.selectedCheckboxes.includes(
            'googleMyBusiness'
          )
            ? true
            : false,
          socialMediaMarketing: selection.selectedCheckboxes.includes(
            'socialMediaMarketing'
          )
            ? true
            : false,
          leads: selection.selectedCheckboxes.includes('leads') ? true : false,
          views: selection.selectedCheckboxes.includes('views') ? true : false,
          leadsCount: selection.counterValues.counter1,
          viewsCount: selection.counterValues.counter2,
          total: selection.totalPrice,
        })
      );
    }
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // All steps stored in an array for easy navigation
  const steps = [
    <div key={1} className="slide-in-left">
      <StepOne
        key={1}
        nextStep={nextStep}
        prevStep={prevStep}
        setSelection={(data) => setSelection(1, data)}
      />
    </div>,
    <div key={2} className="slide-in-left">
      <StepTwo
        key={2}
        nextStep={nextStep}
        prevStep={prevStep}
        setSelection={(data) => setSelection(2, data)}
      />
    </div>,
    <div key={3} className="slide-in-left">
      <StepThree
        key={3}
        nextStep={nextStep}
        prevStep={prevStep}
        setSelection={(data) => setSelection(3, data)}
      />
    </div>,
    <div key={4} className="slide-in-left">
      <StepFour
        key={4}
        nextStep={nextStep}
        prevStep={prevStep}
        setSelection={(data) => setSelection(4, data)}
      />
    </div>,
    <div key={5} className="slide-in-left">
      <StepFive
        key={5}
        nextStep={nextStep}
        prevStep={prevStep}
        setSelection={(data) => setSelection(5, data)}
      />
    </div>,
    <div key={6} className="slide-in-left">
      <StepSix
        key={6}
        nextStep={nextStep}
        prevStep={prevStep}
        setSelection={(data) => setSelection(6, data)}
      />
    </div>,
    <div key={7} className="slide-in-left">
      <StepSeven
        key={7}
        nextStep={nextStep}
        prevStep={prevStep}
        setSelection={(data) => setSelection(7, data)}
      />
    </div>,
    <div key={8} className="slide-in-left">
      <StepEight
        key={8}
        nextStep={nextStep}
        prevStep={prevStep}
        setSelection={(data) => setSelection(8, data)}
      />
    </div>,
    <div key={9} className="slide-in-left">
      <StepNine
        key={9}
        nextStep={nextStep}
        prevStep={prevStep}
        setSelection={(data) => setSelection(9, data)}
      />
    </div>,
  ];

  return (
    <div>
      <header className="font-poppins">
        <div className="black-line flex justify-center items-center text-center bg-black lg:max-h-[6vh] overflow-hidden text-white px-5 lg:px-16 py-3 text-xl font-bold">
          <h1>Grow Your Business Online With Us : Yash Sharma Digital</h1>
        </div>
        <div className="black-line flex justify-center items-center text-center lg:max-h-[6vh] overflow-hidden bg-themeBlue text-white px-5 lg:px-16 py-3 text-xl font-bold italic">
          <h1>Get More Customers, Inquiries, Leads, Visitors & Revenue!</h1>
        </div>
      </header>
      <div className="lg:min-h-[84vh] pt-4 max-w-screen overflow-hidden">{steps[currentStep]}</div>
    </div>
  );
};

export default OnboardingForm;
