import React from 'react';

const StepOne = ({ nextStep }) => {
  return (
    <div className="w-[70%] mx-auto min-h-[80vh] flex flex-col justify-center">
      <div className="join-shadow font-poppins p-6">
        <div className="">
          <h2 className="text-2xl font-medium mx-auto mb-4 text-center w-[70%]">
            You know our services and results. <br /> If not, watch these videos
            or check the testimonials!
          </h2>
          <div className="liner w-[70%] h-[2px] bg-black mx-auto"></div>
        </div>

        <div className="videos mt-8 mx-16 flex justify-around">
          <div className="w-[45%] flex flex-col justify-center">
            <div className="video bg-themeBlue h-[35vh]"></div>
            <button className="bg-black text-white w-[50%] mx-auto mt-4 px-4 py-2">
              Watch Now
            </button>
          </div>
          <div className="w-[45%] flex flex-col justify-center">
            <div className="video bg-themeBlue h-[35vh]"></div>
            <button className="bg-black text-white w-[50%] mx-auto mt-4 px-4 py-2">
              Watch Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-themeBlue text-white py-3 px-16">
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
      <div className="bg-black text-white py-3 px-16">
       <div className="text-2xl font-semibold text-center">1 / 9</div>
      </div>
    </div>
  );
};

export default StepOne;
