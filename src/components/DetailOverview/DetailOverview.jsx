import React from 'react';
import { LinerHead } from '../index';
import { VisitingCard } from '../../assets';

function DetailOverview() {
  return (
    <div className="container px-5 lg:px-0 mx-auto py-10 flex max-h-[137vh] overflow-hidden about">
      {/* left section  */}
      <div className="left w-[40%]">
        <LinerHead lineClassName={`w-[40%] bg-black`}>overview</LinerHead>
      </div>
      {/* right section  */}
      <div className="right w-[60%] flex flex-col gap-8">
        <div className="">
          <h1 className="text-5xl font-bold">Why its important? </h1>
        </div>
        <div className="flex gap-7 w-[75%]">
          {/* inner-left  */}
          <div className="inner-left w-1/2 flex flex-col gap-5">
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
          <div className="inner-right w-1/2 flex flex-col gap-5">
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
        <div className="lower flex justify-end items-end mt-[5.5rem] w-[50%] ml-auto mr-16">
          <img
            src={VisitingCard}
            alt="visiting-card"
            className="rotate-[12deg] shadow-lg shadow-black"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailOverview;
