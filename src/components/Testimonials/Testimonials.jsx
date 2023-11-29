import React from 'react';
import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
} from '../../assets/reviews';
import { Button } from '../index';

function Testimonials() {
  return (
    <div className="bg-[#eeeeee]">
      <div className="container px-5 lg:px-10 mx-auto flex py-10 flex-col">
        <h2 className=" text-5xl lg:text-7xl py-2 lg:py-5 font-bold text-center w-full">
          Testimonials
        </h2>
        <div className="flex flex-col lg:flex-row pt-10 gap-5">
          {/* left  */}
          <div className="left lg:w-1/2 flex flex-col gap-5 max-h-[295vh]">
            <img src={Eight} alt="review" />
            <img src={Five} alt="review" />
            <img src={Ten} alt="review" />
            <img src={Seven} alt="review" />
            <img src={Six} alt="review" />
          </div>
          {/* right  */}
          <div className="right lg:w-1/2 flex flex-col gap-5 max-h-[295vh] overflow-hidden">
            <img src={One} alt="review" />
            <img src={Two} alt="review" />
            <img src={Three} alt="review" />
            <img src={Four} alt="review" />
          </div>
        </div>
        <div className="mx-auto pt-10">
          <Button
            className={`bg-black text-white py-4 px-7`}
            link={'https://calendly.com/contactyash2004/call'}
          >
            Schedule a call
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
