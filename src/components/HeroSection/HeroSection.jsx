import React from 'react';
import { Button } from '../index';
import { HeroCircle, HeroImg, LeftArrow, RightArrow } from '../../assets';
import { Link } from 'react-scroll';

function HeroSection() {
  return (
    <div className="h-auto lg:max-h-[90vh] lg:overflow-hidden relative home">
      {/* others  */}
      <img src={HeroCircle} alt="circle" className="absolute -top-12 z-0" />
      <div className="home container px-5 lg:px-10 mx-auto flex flex-col lg:flex-row lg:max-h-[90vh] relative lg:overflow-hidden">
        {/* left-content section */}
        <div className="left lg:w-1/2 flex flex-col gap-7 justify-center z-10">
          <h1 className="text-5xl lg:text-[4rem] capitalize font-bold lg:leading-[4.5rem] text-center lg:text-left">
            grow your business with ads
          </h1>
          <p className="text-xl lg:text-3xl text-center lg:text-left capitalize">
            helping businesses generate more profit using digital marketing.
          </p>
          <div className="buttons flex gap-5 items-center">
            <Button
              className={`bg-red px-7 py-3 text-white`}
              link={'https://calendly.com/contactyash2004/call'}
            >
              schedule a call
            </Button>
            <Link to={'case-study'}>
              <Button className={`border-2 border-red py-3 px-7`}>
                view case study
              </Button>
            </Link>
          </div>
        </div>

        {/* image section  */}
        <div className="image lg:w-1/2 h-[55vh] lg:min-h-[84vh] lg:overflow-hidden relative">
          <div className="w-full h-full absolute">
            <img
              src={HeroImg}
              alt="hero-image"
              className="mx-auto lg:w-[80%] lg:-mt-[4rem] z-10"
            />
            <span className="capitalize absolute top-[10%] font-bold -rotate-[10deg] text-xl lg:text-2xl">
              yash sharma
            </span>
            <span className=" absolute top-[18%] left-[10%] w-[15%]">
              <img src={LeftArrow} alt="" className="" />
            </span>
            <span className="capitalize absolute top-[20%] font-bold rotate-[16deg] text-[1rem] lg:text-2xl right-0">
              digital marketer
            </span>
            <span className=" absolute top-[24%] lg:top-[28%] w-[9%] right-[20%] lg:right-[10%]">
              <img src={RightArrow} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
