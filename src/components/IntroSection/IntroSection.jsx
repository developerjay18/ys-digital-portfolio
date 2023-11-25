import React from 'react';
import { Button } from '../index';
import { IntroImg } from '../../assets';

function IntroSection() {
  return (
    <div className="container px-5 flex lg:px-0 mx-auto py-10">
      {/* left  */}
      <div className="left w-1/2 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold capitalize">
            let&apos; talk about me
          </h1>
          <div className="w-full flex items-center gap-5">
            <span className="w-[50%] h-1 bg-black block"></span>
            <span className="capitalize text-4xl font-semibold">
              a small intro
            </span>
          </div>
        </div>
        <div className="text-xl flex flex-col gap-10 pr-14">
          <p>From Running a Clothes Shop to Doing Digital Marketing:</p>
          <p>
            Back in 11th and 12th grade, my family and I started a clothes
            store. It wasn&apos;t just about making money; we wanted to figure
            out how businesses work and what Indian customers like.
          </p>
          <p>
            But then I got curious about other types of businesses, so I learned
            about digital marketing.
          </p>
          <p>
            After finishing my digital marketing course and watching tons of
            videos about marketing and business,
          </p>
          <p>
            now I&apos;m helping other businesses make sales and grow using
            digital marketing.
          </p>
        </div>
        <div className="">
          <Button
            className={`bg-red text-white py-3 px-8 shadow-lg shadow-black`}
          >
            whatsapp now
          </Button>
        </div>
      </div>
      {/* right  */}
      <div className="right w-1/2">
        <img src={IntroImg} alt="image" className="w-[90%] ml-auto" />
      </div>
    </div>
  );
}

export default IntroSection;
