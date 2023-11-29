import React from 'react';
import { VisitingCard, FeatherImg } from '../../assets';
import { LinerHead, Button } from '../index';

function HireSection() {
  return (
    <div className="bg-gradient">
      <div className="container px-5 lg:px-0 mx-auto text-white max-h-[98vh] overflow-hidden py-10 lg:py-0">
        {/* upper  */}
        <div className="upper lg:block hidden h-[35vh] w-[60%] ml-auto overflow-hidden">
          <img
            src={VisitingCard}
            alt="visiting-card"
            className="w-[50%] rotate-[12deg] ml-auto mr-[4rem] -mt-[6.8rem] cursor-pointer shadow-lg shadow-black"
          />
        </div>
        {/* middle  */}
        <div className="middle flex flex-col lg:flex-row py-10 gap-10 lg:gap-0 lg:pl-20">
          <div className="left lg:w-1/2">
            <LinerHead lineClassName={`w-[30%] lg:w-[40%] bg-white`}>
              <span className="capitalize text-md">still not convinced?</span>
            </LinerHead>
          </div>
          <div className="right lg:w-1/2 flex flex-col gap-5">
            <h1 className="text-4xl font-bold">
              Don&apos;t worry see my results.
            </h1>
            <Button
              className={`bg-red py-3 px-7 text-white`}
              link={'https://calendly.com/contactyash2004/call'}
            >
              schedule a call
            </Button>
          </div>
        </div>
        {/* lower */}
        <div className="lower hidden lg:block pl-20 w-[40%] max-h-full overflow-hidden">
          <img
            src={FeatherImg}
            alt="image"
            className="shadow-lg shadow-black"
          />
        </div>
      </div>
    </div>
  );
}

export default HireSection;
