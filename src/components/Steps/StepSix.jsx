import React, { useState } from 'react';

const StepSix = ({ nextStep, prevStep, setSelection }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleNext = () => {
    if (selectedOption) {
      setSelection(selectedOption); // Store selection in main state
      nextStep(); // Proceed to next step
    } else {
      alert('Please select an option.');
    }
  };

  return (
    <div className="w-[95%] lg:w-[70%] font-poppins mx-auto lg:min-h-[77vh] flex flex-col justify-end">
      <div className="join-shadow font-poppins p-6">
        {/* heading  */}
        <div className="">
          <h2 className="text-2xl font-medium mx-auto mb-4 text-center lg:w-[70%]">
            Are you ready?
          </h2>
          <div className="liner lg:w-[70%] h-[2px] bg-black mx-auto"></div>
        </div>

        {/* options  */}
        <div className="videos mt-8 lg:mx-16 flex flex-col lg:flex-row justify-center gap-x-8">
          <div className="lg:w-[70%] min-h-[47vh] flex flex-col justify-center">
            <label className="border-black p-4 border flex justify-start items-start flex-col lg:flex-row">
              <input
                type="radio"
                value="excited to join"
                checked={selectedOption === 'excited to join'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  nextStep();
                }}
              />
              <img
                src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796899/ptixz3orpiam3myqotrx.png"
                alt="icon"
                className="w-[250px] mx-auto"
              />
              <div className="text-center flex justify-center items-center lg:mt-16 font-semibold text-3xl">
                Excited to join <br /> this package for just ₹15,000!
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* action buttons  */}
      <div className="bg-themeBlue flex justify-between text-white py-3 px-5 lg:px-16">
        <div className="flex items-center">
          <button
            className="text-xl flex items-center justify-center ml-auto gap-x-2"
            onClick={prevStep}
          >
            Previous{' '}
            <img
              src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796899/aoppaxxhon3p2wk4pqm9.png"
              alt="icon"
              className="w-14"
            />
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl flex items-center justify-center ml-auto gap-x-2"
            onClick={handleNext}
          >
            Next{' '}
            <img
              src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796898/py8pjodwe5uuc0zmtkua.png"
              alt="icon"
              className="w-14"
            />
          </button>
        </div>
      </div>
      <div className="bg-black text-white py-3 px-5 lg:px-16">
        <div className="text-2xl font-semibold text-center">6 / 9</div>
      </div>
    </div>
  );
};

export default StepSix;
