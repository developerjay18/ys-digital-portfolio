import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';

function StatsSection() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
        controls.start({ opacity: 1, scale: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const statsData = [
    {
      number: '20',
      extra: 'Million +',
      title: 'reach',
    },
    {
      number: '30000',
      extra: '+',
      title: 'leads',
    },
    {
      number: '5',
      extra: 'star',
      title: 'rated',
    },
    {
      number: '115',
      extra: 'X',
      title: 'ROAS',
    },
  ];

  return (
    <div className="bg-gradient text-white my-10 py-10">
      <div className="w-full flex container px-5 lg:px-0 mx-auto py-10 justify-between br-gradient flex-col md:flex-row flex-wrap gap-12 md:gap-0 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="w-full flex justify-around flex-col md:flex-row gap-12 md:gap-0"
        >
          {statsData.map((data) => (
            <div
              id="count-up-section"
              className="w-full md:w-[50%] lg:w-auto"
              key={data.number}
            >
              {isVisible && (
                <div className="flex flex-col gap-3 md:py-5 lg:py-0">
                  <div className=" text-4xl lg:text-5xl text-gradient font-semibold ">
                    <span>
                      <CountUp
                        start={0}
                        end={data.number}
                        duration={7}
                        className=""
                      />
                    </span>
                    <span>{data.extra}</span>
                  </div>
                  <div className="text-md md:text-4xl capitalize font-semibold">
                    {data.title}
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default StatsSection;
