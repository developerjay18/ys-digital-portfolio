import React from 'react';
import { LinerHead, Button } from '../index';
import { OverviewImg, OverviewCircle } from '../../assets';

function Overview() {
  return (
    <div className="bg-[#ffffff] relative">
      {/* others */}
      <img
        src={OverviewCircle}
        alt="circle"
        className="absolute top-0 w-full right-0"
      />
      <div className="container px-5 lg:px-0 mx-auto py-16 flex flex-col relative">
        <div className="flex z-10 py-10">
          {/* left section  */}
          <div className="left w-[40%]">
            <LinerHead lineClassName={`w-[40%] bg-black`}>overview</LinerHead>
          </div>
          {/* right section  */}
          <div className="right w-1/2 flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Why consult with yash?</h1>
            <p className="text-lg">
              If you want to take your offline business online, expand its
              reach, and connect with more customers, a consultation with Yash
              Sharma might be the perfect solution for you.
            </p>
            <Button className={`bg-red py-3 px-7 text-white`}>
              book meeting now
            </Button>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={OverviewImg} alt="overview-img" />
      </div>
    </div>
  );
}

export default Overview;