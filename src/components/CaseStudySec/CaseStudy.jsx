import React from 'react';
import { LinerHead } from '../index';
import { Astro } from '../../assets';

function CaseStudy({ imgUrl, title, description, stat1, stat2, stat3, bgColor}) {
  return (
    <div className={`flex ${bgColor} justify-between`}>
      {/* left  */}
      <div className="left w-[40%]">
        <div className="w-full">
          <img
            src={imgUrl}
            alt="astro"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* right */}
      <div className="right w-[50%] flex flex-col justify-center gap-10 pr-20">
        <h1 className="text-5xl font-bold capitalize">{title}</h1>
        <p className="text-xl">{description}</p>
        <div className="flex justify-between text-2xl font-semibold">
          <div className=" flex flex-col">
            <span>{stat1.number}</span>{' '}
            <span className="capitalize">{stat1.value}</span>
          </div>
          <div className="border-l-2 pl-8 flex flex-col">
            <span>{stat2.number}</span>{' '}
            <span className="capitalize">{stat2.value}</span>
          </div>
          <div className="border-l-2 pl-8 flex flex-col">
            <span>{stat3.number}</span>{' '}
            <span className="capitalize">{stat3.value}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
