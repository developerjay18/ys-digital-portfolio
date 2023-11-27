import React from 'react';

function MovingSlider({ links }) {
  return (
    <div className="pt-5 slider bg-black blurred-div">
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
