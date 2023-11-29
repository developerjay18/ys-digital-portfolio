import React from 'react';
import { FeatherImg } from '../../assets';
import { Button } from '../index';

function PointsSection() {
  return (
    <div className="container px-5 lg:px-0 mx-auto overflow-hidden flex">
      {/* left  */}
      <div className="left hidden lg:block w-[40%] pl-20 -mt-[14rem]">
        <img src={FeatherImg} alt="" />
      </div>
      {/* right */}
      <div className="right lg:w-[60%] lg:pl-10 pt-10 flex flex-col gap-10 lg:gap-5">
        <h1 className="font-bold text-6xl capitalize">no more,</h1>
        <ul className="text-3xl lg:text-5xl list-disc pl-16 lg:pl-20 flex flex-col gap-5">
          <li className="">Slow SEO techtics</li>
          <li className="">Boring Organic Strategy</li>
          <li className="lg:leading-[4rem] leading-[2.4rem]">
            Relying On Third-party Websites For Leads
          </li>
        </ul>
        <p className="text-xl">
          &gt; Shift To Fast & Effective Marketing Strategy and generate real
          profits...
        </p>
        <Button className={`bg-red text-white py-3 px-7`}>
          contact now to grow
        </Button>
      </div>
    </div>
  );
}

export default PointsSection;
