import React from 'react';
import * as Img from '../../assets/certificate-logos';

function MovingSlider() {
  return (
    <div className="pt-5 slider bg-black blurred-div">
      <div className="slide-track">
        <div className="slide">
          <img className='border bg-black' src={Img.ADSM} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.Amazon} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.GS} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.Google} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.HS} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.HubSpot} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.Insta} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.Meta} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.ADSM} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.SD} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.SR} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.Udemy} alt="image" />
        </div>
        <div className="slide">
          <img className='border bg-black' src={Img.YT} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default MovingSlider;
