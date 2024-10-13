import React, { useState } from 'react';

const StepThree = ({ nextStep, prevStep, setSelection }) => {
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
    <div className="w-[70%] font-poppins mx-auto min-h-[77vh] flex flex-col justify-end">
      <div className="join-shadow font-poppins p-6">
        {/* heading  */}
        <div className="">
          <h2 className="text-2xl font-medium mx-auto mb-4 text-center w-[70%]">
            What type of business do you have?
          </h2>
          <div className="liner w-[70%] h-[2px] bg-black mx-auto"></div>
        </div>

        {/* options  */}
        <div className="videos mt-8 mx-16 flex justify-center gap-x-8">
          <div className="w-[20%] min-h-[47vh] flex flex-col justify-center">
            <label className="border-black p-4 border">
              <input
                type="radio"
                value="completely offline"
                checked={selectedOption === 'completely offline'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  nextStep();
                }}
              />
              <img
                src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796900/qai78o8qvmtyx5lf6biv.png"
                alt="icon"
                className="w-[100px] mx-auto"
              />
              <div className="text-center mt-4 font-semibold text-xl">
                Completely Offline
              </div>
            </label>
          </div>

          <div className="w-[20%] min-h-[47vh] flex flex-col justify-center">
            <label className="border-black p-4 border">
              <input
                type="radio"
                value="completely online"
                checked={selectedOption === 'completely online'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  nextStep();
                }}
              />
              <img
                src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796899/crbul2k9azoiptm1ardq.png"
                alt="icon"
                className="w-[95px] mx-auto"
              />
              <div className="text-center mt-4 font-semibold text-xl">
                Completely Online
              </div>
            </label>
          </div>

          <div className="w-[25%] min-h-[47vh] flex flex-col justify-center">
            <label className="border-black p-4 border">
              <input
                type="radio"
                value="offline + online"
                checked={selectedOption === 'offline + online'}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  nextStep();
                }}
              />
              <img
                src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796898/jaamcoiczpwgtzm5bdom.png"
                alt="icon"
                className="w-[405px] my-2 mx-auto"
              />
              <div className="text-center mt-4 font-semibold text-xl">
                Offline + <br /> Online
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* action buttons  */}
      <div className="bg-themeBlue flex justify-between text-white py-3 px-16">
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
    </div>
  );
};

export default StepThree;
