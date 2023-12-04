import React from 'react';
import { LinerHead, Button } from '../index';
import { OverviewImg, OverviewCircle } from '../../assets';
import { calLink } from '../data';

function Overview() {
  return (
    <div className="bg-[#ffffff] relative">
      {/* others */}
      <div className="absolute hidden lg:block right-0">
        <img
          src={OverviewCircle}
          alt="circle"
          className=""
        />
      </div>
      <div className="container px-5 lg:px-10 mx-auto lg:py-16 flex flex-col relative">
        <div className="flex z-10 py-10 gap-10 lg:gap-0 flex-col lg:flex-row">
          {/* left section  */}
          <div className="left lg:w-[40%]">
            <LinerHead lineClassName={`w-[40%] bg-black`}>overview</LinerHead>
          </div>
          {/* right section  */}
          <div className="right lg:w-1/2 flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Why consult with yash?</h1>
            <p className="text-lg">
              If you want to take your offline business online, expand its
              reach, and connect with more customers, a consultation with Yash
              Sharma might be the perfect solution for you.
            </p>
            <Button
              className={`bg-red py-3 px-7 text-white`}
              link={calLink}
            >
              schedule a call
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
