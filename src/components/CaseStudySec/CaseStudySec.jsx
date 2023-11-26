import React from 'react';
import CaseStudy from './CaseStudy';
import { caseStudies } from '../data';

function CaseStudySec() {
  return (
    <div className="">
      {caseStudies.map((caseStudy, index) => (
        <CaseStudy
          key={index}
          title={caseStudy.title}
          imgUrl={caseStudy.imgUrl}
          description={caseStudy.description}
          stat1={caseStudy.stat1}
          stat2={caseStudy.stat2}
          stat3={caseStudy.stat3}
          bgColor={caseStudy.bgColor}
        />
      ))}
    </div>
  );
}

export default CaseStudySec;
