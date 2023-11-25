import React from 'react';
import { LinerHead, Button } from '../index';
import { OverviewImg, HeroCircle } from '../../assets';

function Overview() {
  return (
    <div className="bg-[#ffffff]">
      <div className="container px-5 lg:px-0 mx-auto py-16 flex flex-col relative">
        {/* others */}
        <img
          src={HeroCircle}
          alt="circle"
          className="absolute top-0 w-[50%] right-0"
        />
        <div className="flex z-10">
          {/* left section  */}
          <div className="left w-1/2">
            <LinerHead lineClassName={`w-[50%] bg-black`}>overview</LinerHead>
          </div>
          {/* right section  */}
          <div className="right w-1/2 flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Why consult with yash?</h1>
            <p className="text-lg">
              If you want to take your offline business online, expand its
              reach, and connect with more customers, a consultation with Yash
              Sharma might be the perfect solution for you.
            </p>
            <Button
              className={`bg-red py-3 px-7 text-white shadow-md shadow-black hover:shadow-red`}
            >
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
