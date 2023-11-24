import React from 'react';
import BookCover from '../../assets/backgrounds/book-mockup.svg';
import { Button } from '../index';

function BookSection() {
  return (
    <div className="container px-5 lg:px-0 mx-auto py-10 flex">
      {/* left side  */}
      <div className="left w-1/2">
        <img src={BookCover} alt="book-cover" className="" />
      </div>
      {/* right side  */}
      <div className="right w-1/2 flex justify-center flex-col gap-5">
        <h1 className="text-5xl font-bold">
          How To Grow Business With Facebook Ads?
        </h1>
        <p className="text-lg">
          If you want to make more money and need a simple guide on how to run
          Facebook ads, just grab this FREE guide and start running your own
          ads.
        </p>
        <Button
          className={`bg-red py-3 px-7 text-white shadow-md shadow-black hover:shadow-red`}
        >
          download now
        </Button>
      </div>
    </div>
  );
}

export default BookSection;
