import React from 'react';
import { LinerHead } from '../index';

function MovingSlider({ heading, items, imgLinks }) {
  console.log(imgLinks);
  return (
    <div className="bg-gradient w-full flex py-10 mx-auto text-white flex-col gap-5">
      {/* heading  */}
      <div className="heading container px-5 lg:px-0 mx-auto">
        <LinerHead lineClassName={` w-[30%] bg-white`}>worked with</LinerHead>
      </div>
      {/* slider  */}
      <h1 className="border">section pending....</h1>
    </div>
  );
}

export default MovingSlider;
