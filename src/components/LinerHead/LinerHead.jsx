import React from 'react';

function LinerHead({ className, children, lineClassName }) {
  return (
    <div className="flex gap-5 text-3xl font-normal items-center">
      <h1 className={`${className} capitalize`}>{children}</h1>
      <div className={`${lineClassName} h-1`}></div>
    </div>
  );
}

export default LinerHead;
