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
    <div className="container px-5 lg:px-0 mx-auto flex py-10 flex-col">
      <h2 className="text-5xl font-bold text-center w-full">Testimonials</h2>
      <div className="flex pt-10 gap-5">
        {/* left  */}
        <div className="left w-1/2 flex flex-col gap-5 max-h-[295vh]">
          <img src={Eight} alt="review" />
          <img src={Five} alt="review" />
          <img src={Ten} alt="review" />
          <img src={Seven} alt="review" />
          <img src={Six} alt="review" />
        </div>
        {/* right  */}
        <div className="right w-1/2 flex flex-col gap-5 max-h-[295vh] overflow-hidden">
          <img src={One} alt="review" />
          <img src={Two} alt="review" />
          <img src={Three} alt="review" />
          <img src={Four} alt="review" />
        </div>
      </div>
      <div className="mx-auto pt-10">
        <Button className={`bg-black text-white py-2 px-7`}>
          Schedule a call
        </Button>
      </div>
    </div>
  );
}

export default Testimonials;
