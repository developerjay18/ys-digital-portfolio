import React from 'react';
import BookCover from '../../assets/backgrounds/book-mockup.png';
import { Button } from '../index';

function BookSection() {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="container px-5 lg:px-0 mx-auto flex">
        {/* left side  */}
        <div className="left w-1/2">
          <img src={BookCover} alt="book-cover" className="" />
        </div>
        {/* right side  */}
        <div className="right w-1/2 flex justify-center flex-col gap-7">
          <h1 className="text-7xl font-bold leading-[5rem] capitalize">
            facebook ads guide
          </h1>
          <p className="text-lg pr-10">
            If you want to make more money and need a simple guide on how to run
            Facebook ads, just grab this FREE guide and start running your own
            ads.
          </p>
          <Button className={`bg-red py-3 px-7 text-white`}>
            download now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookSection;
