import React from 'react';
import { FeatherImg } from '../../assets';
import { Button } from '../index';

function PointsSection() {
  return (
    <div className="container px-5 lg:px-0 mx-auto overflow-hidden flex">
      {/* left  */}
      <div className="left w-[40%] pl-20 -mt-[14rem]">
        <img src={FeatherImg} alt="" />
      </div>
      {/* right */}
      <div className="right w-[60%] pl-10 pt-10 flex flex-col gap-10">
        <h1 className="font-bold text-5xl capitalize">no more,</h1>
        <ul className="text-5xl list-disc pl-20 flex flex-col gap-5">
          <li className="">slow SEO techtics</li>
          <li className="">Boring Organic Strategy</li>
          <li className="leading-[4rem]">
            Relying On Third-party Websites For Leads
          </li>
        </ul>
        <p className="text-3xl">
          &gt; Shift To Fast & Effective Marketing Strategy To Really Get
          Orders...
        </p>
        <Button
          className={`bg-red text-white py-3 px-7 shadow-lg shadow-black`}
        >
          contact now to grow
        </Button>
      </div>
    </div>
  );
}

export default PointsSection;
