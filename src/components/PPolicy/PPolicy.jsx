import React from 'react';
import privacyPolicyData from './data';

function PPolicy() {
  return (
    <div className="pp px-5 lg:px-20 flex flex-col gap-14 lg:gap-20 py-5 lg:py-10">
      {/* upper  */}
      <div className="upper pt-5">
        <div className="heading border-b-2 pb-3">
          <h2 className="text-3xl lg:text-5xl font-semibold text-center">
            Privacy Policy
          </h2>
        </div>
      </div>
      {/* lower  */}
      <div className="lower lg:px-20 pb-5">
        <div className="termss flex flex-col gap-7">
          {privacyPolicyData.map((item, index) => (
            <div className="term flex flex-col gap-2" key={index}>
              <div className="heading flex gap-2 font-bold text-lg">
                <span>{index + 1}.</span>
                <span>{item.question}</span>
              </div>
              <div className="content text-lg">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PPolicy;
