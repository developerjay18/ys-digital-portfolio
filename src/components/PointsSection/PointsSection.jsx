import React from 'react';
import { FeatherImg } from '../../assets';
import { Button } from '../index';
import { calLink } from '../data';

function PointsSection() {
  return (
    <div className="container px-5 lg:px-0 mx-auto overflow-hidden flex flex-col lg:flex-row">
      {/* left  */}
      <div className="left w-full lg:w-[30%] lg:pl-20 lg:pt-10">
        <img src={FeatherImg} alt="" />
      </div>
      {/* right */}
      <div className="right lg:w-[60%] lg:pl-10 pt-10 flex flex-col gap-10 lg:gap-5">
        <h1 className="font-bold text-6xl capitalize">no more,</h1>
        <ul className="text-3xl lg:text-5xl list-disc pl-16 lg:pl-20 flex flex-col gap-6">
          <li className="capitalize">Slow SEO techtics</li>
          <li className="capitalize">no more complex funnels</li>
          <li className="capitalize">Writing lengthy blog posts</li>
          <li className="capitalize">Boring Organic Strategy</li>
          <li className="lg:leading-[4rem] leading-[2.4rem]">
            Relying On Third-party Websites For Leads
          </li>
        </ul>
        <p className="text-2xl">
          &gt; Shift To Fast & Effective Marketing Strategy and generate real
          profits...
        </p>
        <Button
          className={`bg-red text-white py-3 px-7`}
          link={calLink}
        >
          schedule a call
        </Button>
      </div>
    </div>
  );
}

export default PointsSection;
