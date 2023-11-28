import React from 'react';
import { S1, S2, S3 } from '../../assets';

function Process({ step, imgURL, title, content }) {
  return (
    <fieldset className="border border-white text-center w-[30%] rounded-3xl">
      <legend className="px-3 text-xl capitalize">{step || 'step 01'}</legend>
      <div className="w-[80%] mx-auto">
        <img src={imgURL} alt="image" />
      </div>
      <h3 className="bg-white text-black py-3 w-[80%] mx-auto font-bold text-2xl capitalize">
        {title || 'setup social media'}
      </h3>
      <p className="text-left w-[80%] mx-auto py-10 pr-6 text-lg">
        {content || 'content is missing required'}
      </p>
    </fieldset>
  );
}

export default Process;
