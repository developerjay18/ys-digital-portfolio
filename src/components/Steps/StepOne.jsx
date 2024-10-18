import React from 'react';
import { Link } from 'react-router-dom';

const StepOne = ({ nextStep }) => {
  return (
    <div className="lg:w-[70%] w-[95%] mx-auto lg:mt-2 lg:min-h-[80vh] flex flex-col justify-center">
      <div className="join-shadow font-poppins p-6">
        <div className="">
          <h2 className="text-2xl font-medium mx-auto mb-4 text-center lg:w-[70%] hidden lg:block">
            You know about our services and results. <br /> If not, read this
            PDF or check the testimonials!
          </h2>
          <h2 className="text-2xl font-medium mx-auto mb-4 text-center lg:w-[70%] block lg:hidden">
            You know about our services and results. If not, read this PDF or
            check the testimonials!
          </h2>
          <div className="liner lg:w-[70%] h-[2px] bg-black mx-auto"></div>
        </div>

        <div className="videos mt-8 gap-y-8 lg:mx-16 flex flex-col lg:flex-row justify-around">
          <div className="lg:w-[45%] flex flex-col justify-center">
            <div className="video bg-themeBlue lg:h-[32vh]">
              <Link to={'https://bit.ly/yash-portfolio-eng'}>
                <img src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1729225517/y68stv0ukqpq2vsckhef.png" />
              </Link>
            </div>
            <Link
              to={'https://bit.ly/yash-portfolio-eng'}
              className="mx-auto bg-black text-white mt-4 px-4 py-2 w-[55%]"
            >
              <button className="w-full text-cenetr">Learn More (PDF)</button>
            </Link>
          </div>
          <div className="lg:w-[45%] flex flex-col justify-center">
            <div className="video bg-themeBlue lg:h-[32vh]">
              <Link to={'https://maps.app.goo.gl/uxjxNktAQbPvkSK66'}>
                <img src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1729225516/d6ticu8urv27agohikye.png" />
              </Link>
            </div>
            <Link
              to={'https://maps.app.goo.gl/uxjxNktAQbPvkSK66'}
              className="mx-auto bg-black text-white mt-4 px-4 py-2 w-[50%]"
            >
              <button className="w-full text-cenetr">Read Reviews</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-themeBlue text-white py-3 px-5 lg:px-16">
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
