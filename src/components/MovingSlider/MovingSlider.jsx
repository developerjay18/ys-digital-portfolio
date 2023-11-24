import React from 'react';
import { LinerHead } from '../index';

function MovingSlider({ heading, items }) {
  return (
    <div className="bg-gradient w-full mb-20 flex py-10 items-center mx-auto text-white">
      {/* heading  */}
      <div className="heading container px-5 lg:px-0 border mx-auto">
        <LinerHead>worked with</LinerHead>
      </div>
    </div>
  );
}

export default MovingSlider;
