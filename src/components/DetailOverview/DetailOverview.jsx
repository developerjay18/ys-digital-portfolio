import React from 'react';
import { LinerHead } from '../index';
import { VisitingCard } from '../../assets';

function DetailOverview() {
  return (
    <div className="container px-5 lg:px-10 mx-auto pt-10 lg:py-10 flex flex-col lg:flex-row max-h-[147vh] lg:min-h-[140vh] gap-10 lg:gap-0 overflow-hidden relative">
      {/* left section  */}
      <div className="left lg:w-[40%] flex flex-col justify-between">
        <div className="">
          <LinerHead lineClassName={`w-[40%] bg-black`}>overview</LinerHead>
        </div>
        <div className="lower flex pt-5 w-[90%] lg:w-[80%] mx-auto lg:justify-end items-end lg:mt-[5.5rem] ml-auto lg:mr-16 lg:mb-10">
          <img
            src={VisitingCard}
            alt="visiting-card"
            className="lg:-rotate-[8deg] shadow-lg shadow-black"
          />
        </div>
      </div>
      {/* right section  */}
      <div className="right lg:w-[60%] flex flex-col gap-8">
        <div className="">
          <h1 className="text-5xl font-bold">Why its important? </h1>
        </div>
        <div className="flex gap-7 flex-col lg:flex-row w-full lg:w-[75%]">
          {/* inner-left  */}
          <div className="inner-left lg:w-1/2 flex flex-col gap-5">
            <p className="text-lg">
              In today&apos;s world, digital marketing is super important for
              businesses. Imagine 4.9 billion people online every day!
              That&apos;s a huge audience you can reach. It&apos;s like everyone
              having a personal newspaper, but even better.
            </p>
            <p className="text-lg">
              See, with digital ads, you can talk directly to people who are
              most likely to be interested in what you offer. It&apos;s like
              sending out flyers, but only to folks who really care.
            </p>
          </div>
          {/* inner-right  */}
          <div className="inner-right lg:w-1/2 flex flex-col gap-5">
            <p className="text-lg">
              And here&apos;s the cool part: digital marketing gives you way
              more bang for your buck. For every rupee you spend, you can make
              more back – it&apos;s called Return on Ad Spend (ROAS).
            </p>
            <p className="text-lg">
              According to HubSpot, businesses using digital marketing get 3.3
              times more money back compared to old- school methods like
              newspapers, flyers, or big hoardings. So, it&apos;s not just about
              being online; it&apos;s about getting real results for your
              business.
            </p>
            <p className="text-end font-bold text-xl">- yash sharma</p>
          </div>
        </div>
        {/* --lower */}
      </div>
    </div>
  );
}

export default DetailOverview;
