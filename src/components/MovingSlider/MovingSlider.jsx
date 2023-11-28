import React from 'react';

function MovingSlider({ links, heading }) {
  return (
    <div className="pt-5 slider bg-black blurred-div relative">
      {/* <div className="absolute -top-5 z-10 h-full w-full">
      <img src={BlurLeft} alt="" className=''/>
    </div> */}
      {/* heading */}``
      <div className="heading">
        <h1 className="capitalize text-5xl text-white font-semibold pl-8">
          {heading}
        </h1>
      </div>
      <div className="slide-track">
        {links.map((link, index) => (
          <div className="slide" key={index}>
            <img className="border bg-black" src={link.slug} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovingSlider;
