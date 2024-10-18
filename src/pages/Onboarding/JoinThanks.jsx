import React from 'react';
import { Link } from 'react-router-dom';

const JoinThanks = () => {
  return (
    <div className="">
      <header className="font-poppins">
        <div className="black-line flex justify-center items-center text-center bg-black lg:max-h-[6vh] overflow-hidden text-white px-5 lg:px-16 py-3 text-xl font-bold">
          <h1>Grow Your Business Online With Us : Yash Sharma Digital</h1>
        </div>
        <div className="black-line flex justify-center items-center text-center lg:max-h-[6vh] overflow-hidden bg-themeBlue text-white px-5 lg:px-16 py-3 text-xl font-bold italic">
          <h1>Get More Customers, Inquiries, Leads, Visitors & Revenue!</h1>
        </div>
      </header>
      <div className="lg:min-h-[84vh] pt-4">
        <div className="w-[95%] lg:w-[70%] mx-auto min-h-[80vh] flex flex-col justify-center">
          <div className="join-shadow font-poppins p-6">
            <div className="">
              <h2 className="text-2xl font-medium mx-auto mb-4 text-center lg:w-[70%]">
                Thank you so much! Our team will send you a contract & invoice
                in your given mail & also on WhatsApp!
              </h2>
              <div className="liner lg:w-[70%] h-[2px] bg-black mx-auto"></div>
            </div>

            <div className="videos mt-8 lg:mx-16 flex justify-around">
              <div className="w-[100%] lg:w-[45%] flex flex-col justify-center">
                <div className="video bg-themeBlue h-[35vh]"></div>
              </div>
            </div>
            <p className="text-xl mt-5 font-medium mx-auto text-center lg:w-[70%]">
              Now relax, your work is done! Watch this quick 2-minute video for
              more details.
            </p>
          </div>
          <div className="bg-themeBlue text-white py-3 px-5 lg:px-16">
          <Link to={"/join"}>
            <button className="text-xl flex items-center justify-center mr-auto gap-x-2">
              Previous{' '}
              <img
                src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796899/aoppaxxhon3p2wk4pqm9.png"
                alt="icon"
                className="w-14"
              />
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinThanks;
