import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../index';

function HeroSection() {
  return (
    <div className="home container px-5 lg:px-0 mx-auto py-10">
      {/* left-content section */}
      <div className="left w-1/2 flex flex-col gap-7">
        <h1 className="text-[4rem] capitalize font-bold leading-[4.5rem]">
          grow your business with ads
        </h1>
        <p className="text-3xl capitalize">
          helping businesses generate more profit using digital marketing.
        </p>
        <div className="buttons flex gap-5 items-center">
          <Button
            className={`bg-red px-7 py-3 text-white shadow-md shadow-black hover:shadow-red`}
          >
            whatsapp now
          </Button>
          <Button
            className={`border-2 border-red py-3 px-7 hover:shadow-md hover:shadow-red`}
          >
            view case study
          </Button>
        </div>
      </div>
      {/* image section  */}
      <div className="image">
        
      </div>
    </div>
  );
}

export default HeroSection;
