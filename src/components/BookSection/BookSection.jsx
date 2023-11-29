import React from 'react';
import BookCover from '../../assets/backgrounds/book-mockup.png';
import { Button } from '../index';

function BookSection() {
  return (
    <div className="bg-[#f2f2f2] py-5 lg:py-0">
      <div className="container px-5 lg:px-10 mx-auto flex flex-col lg:flex-row">
        {/* left side  */}
        <div className="left lg:w-1/2">
          <img src={BookCover} alt="book-cover" className="" />
        </div>
        {/* right side  */}
        <div className="right text-center lg:text-left lg:w-1/2 flex justify-center flex-col gap-7">
          <h1 className="text-5xl lg:text-7xl font-bold lg:leading-[5rem] capitalize text-center lg:text-left">
            facebook ads guide
          </h1>
          <p className="text-lg lg:pr-10">
            If you want to make more money and need a simple guide on how to run
            Facebook ads, just grab this FREE guide and start running your own
            ads.
          </p>
          <Button
            className={`bg-red py-3 px-7 text-white`}
            link={'https://yashsharmadigital.com'}
          >
            download now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookSection;
