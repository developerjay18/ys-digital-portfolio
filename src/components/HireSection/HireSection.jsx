import React from 'react';
import { VisitingCard ,FeatherImg} from '../../assets';
import { LinerHead, Button } from '../index';

function HireSection() {
  return (
    <div className="bg-gradient">
      <div className="container px-5 lg:px-0 mx-auto text-white max-h-[98vh] overflow-hidden">
        {/* upper  */}
        <div className="upper h-[35vh] w-[60%] ml-auto overflow-hidden">
          <img
            src={VisitingCard}
            alt="visiting-card"
            className="w-[50%] rotate-[12deg] ml-auto mr-[4rem] -mt-[6.8rem] cursor-pointer shadow-lg shadow-black"
          />
        </div>
        {/* middle  */}
        <div className="middle flex py-10 pl-20">
          <div className="left w-1/2">
            <LinerHead lineClassName={`w-[40%] bg-white`}>
              <span className='capitalize text-md'>still not convinced?</span>
            </LinerHead>
          </div>
          <div className="right w-1/2 flex flex-col gap-5">
            <h1 className="text-4xl font-bold">
              Don&apos;t worry see my results.
            </h1>
            <Button className={`bg-red py-3 px-7 text-white`}>Hire yash sharma</Button>
          </div>
        </div>
        {/* lower */}
        <div className="lower pl-20 w-[40%] max-h-full overflow-hidden">
          <img src={FeatherImg} alt="image" className='shadow-lg shadow-black'/>
        </div>
      </div>
    </div>
  );
}

export default HireSection;
