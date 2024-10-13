import React from 'react';

const JoinThanks = () => {
  return (
    <div className="">
      <header className="font-poppins">
        <div className="black-line text-center bg-black max-h-[8vh] overflow-hidden text-white px-16 py-3 text-2xl font-bold">
          <h1>Grow Your Business Online With Us : Yash Sharma Digital</h1>
        </div>
        <div className="black-line text-center max-h-[8vh] overflow-hidden bg-themeBlue text-white px-16 py-3 text-2xl font-bold italic">
          <h1>Get More Customers, Inquiries, Leads, Visitors & Revenue!</h1>
        </div>
      </header>
      <div className="min-h-[84vh] pt-4">
        <div className="w-[70%] mx-auto min-h-[80vh] flex flex-col justify-center">
          <div className="join-shadow font-poppins p-6">
            <div className="">
              <h2 className="text-2xl font-medium mx-auto mb-4 text-center w-[70%]">
                Thank you so much! Our team will send you a contract & invoice
                in your given mail & also on WhatsApp!
              </h2>
              <div className="liner w-[70%] h-[2px] bg-black mx-auto"></div>
            </div>

            <div className="videos mt-8 mx-16 flex justify-around">
              <div className="w-[45%] flex flex-col justify-center">
                <div className="video bg-themeBlue h-[35vh]"></div>
              </div>
            </div>
            <p className="text-xl mt-5 font-medium mx-auto text-center w-[70%]">
              Now relax, your work is done! Watch this quick 2-minute video for
              more details.
            </p>
          </div>
          <div className="bg-themeBlue text-white py-3 px-16">
            <button className="text-xl flex items-center justify-center mr-auto gap-x-2">
              Previous{' '}
              <img
                src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796899/aoppaxxhon3p2wk4pqm9.png"
                alt="icon"
                className="w-14"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinThanks;
