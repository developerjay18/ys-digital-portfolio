import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { calLink } from '../data';

function VideoSection() {
  useEffect(() => {
    // Include the Wistia scripts
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/w60zfp2qkz.jsonp';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Clean up the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="bg-[#f2f2f2] py-5 lg:py-20 lg:px-24 px-5 flex flex-col lg:flex-row gap-y-7 lg:gap-y-0">
      {/* left  */}
      <div className="left lg:w-1/2 w-full">
        <div className="video text-white text-center flex flex-col gap-5 lg:px-10">
          <div className="heading flex justify-center relative">
            <span className="w-[12%] absolute lg:relative right-10 lg:right-0 lg:top-0 top-6 lg:w-[4%] mt-5">
              <img
                src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1705718330/ysd/zkza1to5blaqxxfxoqju.png"
                alt=""
              />
            </span>
          </div>
          <div
            className="wistia_responsive_padding"
            style={{ padding: '56.25% 0 0 0', position: 'relative' }}
          >
            <div
              className="wistia_responsive_wrapper"
              style={{
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
              }}
            >
              <div
                className="wistia_embed wistia_async_w60zfp2qkz seo=true videoFoam=true"
                style={{ height: '100%', position: 'relative', width: '100%' }}
              >
                <div
                  className="wistia_swatch"
                  style={{
                    height: '100%',
                    left: 0,
                    opacity: 0,
                    overflow: 'hidden',
                    position: 'absolute',
                    top: 0,
                    transition: 'opacity 200ms',
                    width: '100%',
                  }}
                >
                  <img
                    src="https://fast.wistia.com/embed/medias/w60zfp2qkz/swatch"
                    style={{
                      filter: 'blur(5px)',
                      height: '100%',
                      objectFit: 'contain',
                      width: '100%',
                    }}
                    alt=""
                    aria-hidden="true"
                    onLoad={(e) => (e.target.parentNode.style.opacity = 1)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cta pt-0 pb-7 text-lg font-semibold text-black">
            Get Bonuses worth &#8377;6000 for FREE
          </div>
        </div>
      </div>
      {/* right  */}
      <div className="right px-5 lg:p-10 flex flex-col justify-center lg:w-1/2 w-full gap-y-7">
        <h1 className="capitalize font-bold text-4xl text-center lg:text-left lg:text-5xl">
          Work With us &amp; <br /> grow your business
        </h1>
        <p className="text-lg text-black hidden lg:block">
          What we do,how we do it, and our charges: <br />
          watch this video to learn more about <br />
          Facebook ads and our services.
        </p>
        <p className="text-black lg:hidden block text-center">
          What we do,how we do it, and our charges: <br />
          watch this video to learn more about Facebook ads and our services.
        </p>
        <Link
          to={calLink}
          className="bg-red hover:bg-[#ce2323] flex justify-center lg:w-[33%] text-white px-5 py-3 text-md uppercase mx-auto lg:mx-0 lg:mr-auto"
        >
          <button className="uppercase">Schedule a Call</button>
        </Link>
      </div>
    </div>
  );
}

export default VideoSection;
