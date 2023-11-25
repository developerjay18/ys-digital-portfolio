import React from 'react';
import { Logo, StraightArrow, S1, S2, S3 } from '../../assets';
import { Button } from '../index';

function ProcessSection() {
  return (
    <div className="container px-5 lg:px-0 mx-auto py-10 flex flex-col gap-10">
      <div className="border-b-2 w-3/5 pb-5">
        <h1 className="text-7xl font-bold">How it works?</h1>
      </div>
      <p className="w-[70%] text-2xl">
        Digital marketing isn&apos;t complicated. It&apos;s just three simple
        steps. Let me help you how I can help you grow your business online.
      </p>
      {/* cards */}
      <div className="cards flex justify-between">
        {/* card item */}
        <div className="card w-[25%] flex flex-col justify-center items-center gap-5">
          <div className="image">
            <img src={S1} alt="" />
          </div>
          <span className="capitalize text-3xl">step 01</span>
          <div className="title capitalize font-bold border-2 w-full py-4 text-center text-2xl">
            Setup Social Media
          </div>
          <div className="content pr-12 text-lg">
            Firstly, I will create and enhance your social media profiles,
            ensuring a consistent and reliable presence. I will also maintain
            regular posts for at least the initial 7 days to strengthen your
            social media pages. If your page already contains sufficient
            content, congratulations! You can proceed to the next step.{' '}
          </div>
        </div>
        {/* arrow */}
        <div className="w-[12.5%] mt-20">
          <img src={StraightArrow} alt="s-arr" />
        </div>
        {/* card item */}
        <div className="card w-[25%] flex flex-col items-center gap-5">
          <div className="image">
            <img src={S2} alt="" />
          </div>
          <span className="capitalize text-3xl">step 02</span>
          <div className="title capitalize font-bold border-2 w-full py-4 text-center text-2xl">
            Start Running Ad
          </div>
          <div className="content pr-12 text-lg">
            After that, I&apos;ll develop a powerful advertising plan customized
            for your business to run ads on Facebook and Instagram. We&apos;ll
            sit down together to determine your target audience and identify the
            kind of offer that will attract leads and boost sales.
          </div>
        </div>
        {/* arrow */}
        <div className="w-[12.5%] mt-20">
          <img src={StraightArrow} alt="s-arr" />
        </div>
        {/* card item */}
        <div className="card w-[25%] flex flex-col items-center gap-5">
          <div className="image">
            <img src={S3} alt="" />
          </div>
          <span className="capitalize text-3xl">step 03</span>
          <div className="title capitalize font-bold border-2 w-full py-4 text-center text-2xl">
            Scale This System
          </div>
          <div className="content pr-12 text-lg">
            Following 15 days of advertising, we&apos;ll have valuable data to
            expand this system. At this point, we can raise the ad budget and
            significantly grow your business.
          </div>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-center items-center">
        <Button
          className={`bg-red py-3 px-10 text-white shadow-lg shadow-black`}
        >
          whatsapp now
        </Button>
      </div>
    </div>
  );
}

export default ProcessSection;
