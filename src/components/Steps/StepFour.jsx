import React, { useState } from 'react';

const StepFour = ({ nextStep, prevStep, setSelection }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleNext = () => {
    if (selectedOption) {
      setSelection(selectedOption); // Store selection in main state
      nextStep(); // Proceed to next step
    } else {
      alert('Please fill the details.');
    }
  };

  return (
    <div className="w-[95%] lg:w-[70%] font-poppins mx-auto min-h-[77vh] flex flex-col justify-end">
      <div className="join-shadow font-poppins p-6">
        {/* heading  */}
        <div className="">
          <h2 className="text-2xl font-medium mx-auto mb-4 text-center lg:w-[70%]">
            Describe your business in 4-5 words
          </h2>
          <div className="liner lg:w-[70%] h-[2px] bg-black mx-auto"></div>
        </div>

        {/* options  */}
        <div className="videos mt-8 lg:mx-16 flex justify-center gap-x-8">
          <div className="lg:min-h-[47vh] lg:w-[80%] flex flex-col justify-center gap-y-8">
            <img
              src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796899/vxqhldbpzlav6irvmvut.png"
              alt="image"
              className="w-[200px] mx-auto"
            />
            <input
              type="text"
              name="definition"
              id="definition"
              required
              onChange={(e) => {
                setSelectedOption(e.target.value);
                setSelection(e.target.value);
              }}
              className="border border-black py-2 px-4"
            />
            <p className="text-center font-semibold text-lg">
              (EX. &quot;Skin & Hair Clinic&quot; or &quot;Wooden Toys
              Shop&quot;)
            </p>
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
        <div className="text-2xl font-semibold text-center">4 / 9</div>
      </div>
    </div>
  );
};

export default StepFour;
