import React from 'react';

const StepFive = ({ nextStep, prevStep }) => {
  return (
    <div className="w-[70%] font-poppins mx-auto min-h-[77vh] flex flex-col justify-end">
      <div className="join-shadow font-poppins p-6">
        {/* heading  */}
        <div className="">
          <h2 className="text-2xl font-medium mx-auto mb-4 text-center w-[70%]">
            So here is our main offer:
          </h2>
          <div className="liner w-[70%] h-[2px] bg-black mx-auto"></div>
        </div>

        {/* options  */}
        <div className="videos mt-8 mx-16 flex justify-center gap-x-8">
          <div className="min-h-[48vh] w-[80%] flex flex-col justify-center gap-y-8">
            <p className="text-center text-4xl font-semibold">
              Get 200+ Inquiries and Reach 1,00,000+ People for Your Local
              Business with Facebook Ads for Just ₹15,000
            </p>
            <p className="text-center text-4xl font-semibold">
              (100% MoneyBack Guarantee)
            </p>
            <div className="buttons mt-4 flex justify-center gap-x-8">
              <button className="bg-black rounded-full px-6 py-3 text-white text-lg">
                <span></span>
                <span>Watch Service Explanaion Video</span>
              </button>
              <button className="bg-black rounded-full px-6 py-3 text-white text-lg">
                <span></span>
                <span>Watch Client Testimonial Video</span>
              </button>
            </div>
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
            onClick={nextStep}
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

export default StepFive;
