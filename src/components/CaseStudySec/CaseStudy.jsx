import React, { useEffect, useRef } from 'react';
import { LinerHead } from '../index';
import { Astro } from '../../assets';

function CaseStudy({
  imgUrl,
  title,
  description,
  stat1,
  stat2,
  stat3,
  bgColor,
}) {
  const animatedDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animatedDivRef.current) {
        const rect = animatedDivRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
          animatedDivRef.current.classList.add('slide-up'); // Add a CSS class to trigger the animation
        } else {
          animatedDivRef.current.classList.remove('slide-up'); // Remove the class if not in view
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-animation">
      <div className="animated-div" ref={animatedDivRef}>
        <div className={`flex flex-col lg:flex-row ${bgColor} justify-between`}>
          {/* left  */}
          <div className="left lg:w-[40%]">
            <div className="w-full">
              <img
                src={imgUrl}
                alt="astro"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          {/* right */}
          <div className="right w-full px-5 lg:px-0 lg:w-[50%] flex flex-col justify-center gap-10 lg:pr-20">
            <h1 className="text-5xl font-bold capitalize">{title}</h1>
            <p className="text-xl">{description}</p>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between text-2xl font-semibold text-left">
              <div className=" flex gap-5 lg:gap-0 lg:flex-col">
                <span>{stat1.number}</span>{' '}
                <span className="capitalize">{stat1.value}</span>
              </div>
              <div className="lg:border-l-2 border-t-2 border-b-2 lg:border-t-0 lg:border-b-0 py-3 lg:py-0 lg:pl-8 flex gap-5 lg:gap-0 lg:flex-col">
                <span>{stat2.number}</span>{' '}
                <span className="capitalize">{stat2.value}</span>
              </div>
              <div className="lg:border-l-2 lg:pl-8 flex gap-5 lg:gap-0 lg:flex-col pb-10 lg:pb-0">
                <span>{stat3.number}</span>{' '}
                <span className="capitalize">{stat3.value}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
