import React, { useEffect, useRef } from 'react';
import { Button } from '../index';
import Process from './Process';
import { processes } from '../data';

function ProcessSection() {
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
    <div className="container-animation bg-gradient-long">
      <div className="animated-div" ref={animatedDivRef}>
        <div className=" text-white services">
          <div className="container px-5 lg:px-10 mx-auto py-10 flex flex-col gap-10">
            <div className="border-b-2 w-full lg:w-3/5 pb-5">
              <h1 className="text-5xl text-center lg:text-left lg:text-7xl font-bold">
                How it works?
              </h1>
            </div>
            <p className="w-full text-center lg:text-left lg:w-3/5 text-xl">
              Digital marketing isn&apos;t complicated. It&apos;s just three
              simple steps. Let me help you how I can help you grow your
              business online
            </p>
            {/* cards */}
            <div className="cards flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between">
              {processes.map((process, index) => (
                <Process
                  key={index}
                  step={process.step}
                  imgURL={process.imgURl}
                  title={process.title}
                  content={process.content}
                />
              ))}
            </div>
            <div className="mx-auto">
              <Button
                className={` bg-red py-3 px-8`}
                link={'https://calendly.com/contactyash2004/call'}
              >
                schedule a call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
