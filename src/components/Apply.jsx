import React, { useEffect } from 'react';
import {
  pointsData,
  pointsData2,
  businessCategories,
  businessCategories2,
  keywordsData,
  aboutPoints,
  aboutPoints2,
  offerData,
  offerData2,
} from './applyData.js';
import { Link } from 'react-router-dom';

const ApplyPage = () => {
  useEffect(() => {
    // Include the Wistia scripts
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/2sctxanq3z.jsonp';
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
    <div className="font-poppins max-w-screen overflow-hidden">
      {/* hero  */}
      <div className="hero lg:pl-28 px-5 lg:px-0 pt-20 lg:pt-0 flex flex-col lg:flex-row relative font-poppins bg-landing-page ">
        {/* right  */}
        <div className="right lg:w-[60%] top-[30%] lg:absolute text-white flex flex-col justify-center gap-5">
          <h1 className="text-4xl lg:text-5xl text-center lg:text-left lg:leading-[4rem] font-bold">
            Grow Your Service - Based Business With Facebook Ads
          </h1>
          <div className="cta ml-5">
            <Link to={'/apply/form'}>
              <button className=" text-xl lg:text-2xl bg-[#0D65D6] hover:bg-[#0d64d6c9] px-3 py-4 z-20">
                Claim A FREE Facebook Ads Trial
              </button>
            </Link>
          </div>
          <div className="text-[#6f6f6f] text-center lg:text-left">
            Limited Slots Available!
          </div>
        </div>
        {/* left  */}
        <div className="left hidden lg:block lg:w-[52%] ml-auto text-white">
          <img
            src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1705757942/ysd/alizqfpsx1ylhxtokzaj.png"
            alt=""
            className="ml-auto"
          />
          <div className="bg-white text-black right-0 bottom-5 lg:bottom-20 lg:px-24 text-lg font-semibold lg:max-w-[80%] px-4 py-5 text-center absolute">
            Yash Sharma : Digital Marketer
          </div>
        </div>

        {/* left */}
        <div className="left-mobile pt-8 block lg:hidden text-white">
          <img
            src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1705912670/ysd/tyuzdr7oype1w0xax6i3.png"
            alt=""
          />
          <div className="bg-white text-black right-16 bottom-5 lg:bottom-20 lg:px-24 text-lg font-semibold lg:max-w-[80%] px-4 py-5 text-center absolute">
            Yash Sharma : Digital Marketer
          </div>
        </div>
      </div>

      {/* video  */}
      <div className="video bg-[#0D65D6] text-white px-5 lg:px-28 text-center py-16 flex flex-col gap-5">
        <div className="heading flex justify-center relative">
          <span className="text-4xl lg:text-5xl font-bold">
            Kindly Watch This Video First
          </span>
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
              className="wistia_embed wistia_async_2sctxanq3z seo=true videoFoam=true"
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
                  src="https://fast.wistia.com/embed/medias/2sctxanq3z/swatch"
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
        <div className="cta pt-7">
          <Link to={'/apply/form'}>
            <button className=" text-xl hover:bg-[#e9e9e9] lg:text-2xl bg-[#ffffff] text-black font-semibold px-3 py-4">
              Claim A FREE Facebook Ads Trial
            </button>
          </Link>
        </div>
      </div>

      {/* points  */}
      <div className="points min-h-screen bg-landing-page-black text-white px-5 lg:px-28 py-20 flex justify-center items-center">
        <div className="mx-auto flex justify-between flex-col lg:flex-row gap-20 lg:gap-10">
          {/* left  */}
          <div className="left lg:w-[45%] flex flex-col gap-5">
            <div className="heading">
              <h3 className="text-3xl lg:text-4xl pb-4 font-bold">
                Facebook Ads Marketing
              </h3>
              <div className="liner w-[60%] h-[2px] bg-white"></div>
            </div>
            <div className="point-items flex flex-col gap-3">
              {pointsData2.map((item, index) => (
                <div className="point flex items-center gap-3" key={index}>
                  <span className="w-[6%]">
                    <img
                      src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1705718333/ysd/ebqesvtollggb7af1b8a.png"
                      alt=""
                    />
                  </span>
                  <span className="text-lg lg:text-xl">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="right lg:w-[45%] flex flex-col gap-5 ">
            <div className="heading">
              <h3 className="text-3xl lg:text-4xl pb-4 font-bold">
                Other Ways Of Marketing
              </h3>
              <div className="liner w-[60%] h-[2px] bg-white"></div>
            </div>
            <div className="point-items flex flex-col gap-3">
              {pointsData.map((item, index) => (
                <div className="point flex items-center gap-3" key={index}>
                  <span className="w-[6%]">
                    <img
                      src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1705718332/ysd/mn5kon4jambr0qsiaqyo.png"
                      alt=""
                    />
                  </span>
                  <span className="text-lg lg:text-xl">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* worked with */}
      <div className="worked-with bg-[#0D65D6] text-white py-16 flex flex-col gap-16">
        <div className="bg-white text-black">
          <h2 className="text-4xl font-bold py-4 text-center">Worked With</h2>
        </div>
        <div className="points px-5 lg:px-28 flex flex-col lg:flex-row justify-center gap-5 lg:gap-[10rem]">
          {/* left */}
          <div className="left pl-10 lg:pl-0 lg:w-[30%]">
            <ul className="point-items flex flex-col gap-2">
              {businessCategories.map((item, index) => (
                <li
                  style={{ listStyleType: 'disc' }}
                  className="text-2xl lg:text-2xl"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* right  */}
          <div className="right pl-10 lg:pl-0 lg:w-[40%]">
            <ul className="point-items flex flex-col gap-2">
              {businessCategories2.map((item, index) => (
                <li
                  style={{ listStyleType: 'disc' }}
                  className="text-2xl lg:text-2xl"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cta mx-5 lg:mx-auto justify-center flex">
          <Link to={'/apply/form'}>
            <button className="text-xl hover:bg-[#e9e9e9] lg:text-2xl bg-[#ffffff] text-black font-semibold px-3 py-4">
              Claim A FREE Facebook Ads Trial
            </button>
          </Link>
        </div>
      </div>

      {/* keywords  */}
      <div className="keywords bg-landing-page-black text-white px-5 lg:px-28 lg:py-20 py-10 h-screen flex justify-center items-center">
        <div className="flex justify-between flex-col lg:flex-row gap-10">
          {keywordsData.map((item, index) => (
            <div className="keyword lg:w-[25%] flex flex-col gap-3" key={index}>
              <div className="w-[20%] lg:w-[30%]">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="text-xl lg:text-2xl font-semibold">
                {item.title}
              </div>
              <div className="lg:text-md">{item.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* about-our-clients  */}
      <div className="about-clients bg-landing-page-black text-white px-5 lg:px-28 py-10 lg:py-20 flex flex-col gap-16">
        <div className="heading">
          <div className="text-4xl lg:text-5xl pb-4 font-bold">
            About our clients:
          </div>
          <div className="liner w-[60%] h-[2px] bg-white"></div>
        </div>
        <div className="points flex flex-col lg:flex-row justify-between gap-5 lg:gap-0">
          {/* left */}
          <div className="left lg:w-[45%] flex flex-col gap-5">
            <div className="point-items flex flex-col gap-5">
              {aboutPoints.map((item, index) => (
                <div className="point flex gap-3" key={index}>
                  <span className="max-w-[6%]">
                    <img
                      src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1705718332/ysd/mn5kon4jambr0qsiaqyo.png"
                      alt=""
                    />
                  </span>
                  <span className="lg:text-xl">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* right  */}
          <div className="right lg:w-[45%] flex flex-col gap-5">
            <div className="point-items flex flex-col gap-5">
              {aboutPoints2.map((item, index) => (
                <div className="point flex gap-3" key={index}>
                  <span className="max-w-[6%]">
                    <img
                      src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1705718332/ysd/mn5kon4jambr0qsiaqyo.png"
                      alt=""
                    />
                  </span>
                  <span className="lg:text-xl">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cta flex justify-center">
          <Link to={'/apply/form'}>
            <button className="text-xl hover:bg-[#0d64d6c9] lg:text-2xl bg-[#0D65D6] px-3 py-4">
              Claim A FREE Facebook Ads Trial
            </button>
          </Link>
        </div>
      </div>

      {/* offers  */}
      <div className="offers bg-[#0D65D6] text-white px-5 lg:px-28 py-10 lg:py-20 flex flex-col gap-10 lg:gap-16">
        <div className="heading">
          <div className="text-4xl lg:text-5xl pb-4 font-bold">
            But still, we generated results like these
          </div>
          <div className="liner w-[60%] h-[2px] bg-white"></div>
        </div>
        <div className="points flex justify-between flex-col lg:flex-row gap-4 lg:gap-0">
          {/* left  */}
          <div className="left lg:w-[48%] flex flex-col gap-4">
            {offerData.map((item, index) => (
              <div
                className="point bg-black py-8 text-center lg:text-xl"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
          {/* right  */}
          <div className="right lg:w-[48%] flex flex-col gap-4">
            {offerData2.map((item, index) => (
              <div
                className="point bg-black py-8 text-center lg:text-xl"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer bg-black text-white py-14 text-center lg:text-2xl">
        Thank You! Have A Nice Business....
      </div>
    </div>
  );
};

export default ApplyPage;
