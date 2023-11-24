import React from 'react';
import { VisitingCard } from '../../assets';
import { LinerHead, Button } from '../index';

function HireSection() {
  return (
    <div className="bg-gradient">
      <div className="container px-5 lg:px-0 mx-auto py-1 text-white">
        {/* upper  */}
        <div className="upper h-[35vh] w-[60%] ml-auto overflow-hidden">
          <img
            src={VisitingCard}
            alt="visiting-card"
            className="w-[70%] rotate-[10deg] ml-auto mr-20 -mt-[9.3rem] hover:shadow-lg hover:shadow-red cursor-pointer"
          />
        </div>
        {/* middle  */}
        <div className="middle flex py-20">
          <div className="left w-1/2">
            <LinerHead lineClassName={`w-[40%] bg-white`}>
              still not convienced?
            </LinerHead>
          </div>
          <div className="right w-1/2 flex flex-col gap-5">
            <h1 className="text-4xl font-bold">
              Don&apos;t worry see my results.
            </h1>
            <Button className={`bg-red py-3 px-7 text-white`}>Hire yash</Button>
          </div>
        </div>
        {/* lower */}
      </div>
    </div>
  );
}

export default HireSection;
