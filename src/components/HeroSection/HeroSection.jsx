import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../index';
import { HeroCircle, HeroImg, LeftArrow, RightArrow } from '../../assets';
function HeroSection() {
  return (
    <div className="">
      {/* others  */}
      <img src={HeroCircle} alt="circle" className="absolute -top-12 z-0" />
      <div className="home container px-5 lg:px-0 mx-auto flex max-h-[90vh] relative overflow-hidden">
        {/* left-content section */}
        <div className="left w-1/2 flex flex-col gap-7 justify-center z-10">
          <h1 className="text-[4rem] capitalize font-bold leading-[4.5rem]">
            grow your business with ads
          </h1>
          <p className="text-3xl capitalize">
            helping businesses generate more profit using digital marketing.
          </p>
          <div className="buttons flex gap-5 items-center">
            <Button className={`bg-red px-7 py-3 text-white`}>
              whatsapp now
            </Button>
            <Button className={`border-2 border-red py-3 px-7`}>
              view case study
            </Button>
          </div>
        </div>

        {/* image section  */}
        <div className="image w-1/2 min-h-[84vh] overflow-hidden relative">
          <div className="w-full h-full absolute">
            <img
              src={HeroImg}
              alt="hero-image"
              className="mx-auto w-[80%] -mt-[4rem] z-10"
            />
            <span className="capitalize absolute top-[10%] font-bold -rotate-[10deg] text-2xl">
              yash sharma
            </span>
            <span className=" absolute top-[18%] left-[10%] w-[15%]">
              <img src={LeftArrow} alt="" className="" />
            </span>
            <span className="capitalize absolute top-[20%] font-bold rotate-[10deg] text-2xl right-0">
              digital marketer
            </span>
            <span className=" absolute top-[28%] w-[9%] right-[10%]">
              <img src={RightArrow} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
