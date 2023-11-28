import React from 'react';
import { Button } from '../index';
import Process from './Process';
import { processes } from '../data';

function ProcessSection() {
  return (
    <div className="bg-gradient-long bg-black text-white services">
      <div className="container px-5 lg:px-0 mx-auto py-10 flex flex-col gap-10">
        <div className="border-b-2 w-full lg:w-3/5 pb-5">
          <h1 className="text-5xl text-center lg:text-left lg:text-7xl font-bold">
            How it works?
          </h1>
        </div>
        <p className="w-full text-center lg:text-left lg:w-3/5 text-xl">
          Digital marketing isn&apos;t complicated. It&apos;s just three simple
          steps. Let me help you how I can help you grow your business online
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
          <Button className={` bg-red py-3 px-8`}>whatsapp now</Button>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
