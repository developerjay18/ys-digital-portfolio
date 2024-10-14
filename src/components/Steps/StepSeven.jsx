import React, { useState } from 'react';

const StepSeven = ({ nextStep, prevStep, setSelection }) => {
  // State to manage checkboxes
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    googleMyBusiness: false,
    leads: false,
    views: false,
    socialMediaMarketing: false,
  });

  // State to manage counters
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));

    // Reset counters if the checkbox with counter is unchecked
    if (name === 'leads' && !checked) setCounter1(0);
    if (name === 'views' && !checked) setCounter2(0);
  };

  const handleNext = () => {
    // Collect selected checkboxes and counter values
    const selected = {
      selectedCheckboxes: Object.keys(selectedCheckboxes).filter(
        (key) => selectedCheckboxes[key]
      ),
      counterValues: {
        counter1: selectedCheckboxes.leads ? counter1 : 0,
        counter2: selectedCheckboxes.views ? counter2 : 0,
      },
    };

    console.log(selected);
    setSelection(selected); // Store selection in parent state
    nextStep(); // Proceed to next step
  };

  return (
    <div className="w-[70%] font-poppins mx-auto min-h-[77vh] flex flex-col justify-end">
      <div className="join-shadow font-poppins p-6">
        {/* heading  */}
        <div className="">
          <h2 className="text-2xl font-medium mx-auto mb-4 text-center w-[70%]">
            Add more features to your package for better results!
          </h2>
          <div className="liner w-[70%] h-[2px] bg-black mx-auto"></div>
        </div>

        {/* options  */}
        <div className="videos mt-8 mx-16 flex justify-center gap-x-8">
          <div className="w-[20%] border min-h-[47vh] flex flex-col justify-between">
            <label className="flex flex-col justify-start">
              <input
                type="checkbox"
                name="googleMyBusiness"
                checked={selectedCheckboxes.googleMyBusiness}
                onChange={handleCheckboxChange}
                className="mr-auto ml-4 mt-4"
              />
              <img
                src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796898/ajjfxf8tvgm7rnrtqxd8.png"
                alt="image"
                className="w-[150px] mx-auto"
              />
              <p className="px-4 font-semibold">
                Google My Business Setup & Optimization
              </p>
              <div className="liner px-4 h-[2px] w-[85%] mx-auto bg-black mt-1 mb-2"></div>

              <p className="text-sm pl-4">
                Attract more business when people search for your service on
                Google!
              </p>
              <div className="flex justify-end">
                <div className="price-tag px-2 py-1 mt-2 text-normal font-semibold bg-black text-white">
                  Only &#8377; 2500
                </div>
              </div>
            </label>
          </div>

          <div className="w-[20%] border min-h-[47vh] flex flex-col justify-between">
            <label className="flex flex-col justify-start">
              <input
                type="checkbox"
                name="socialMediaMarketing"
                checked={selectedCheckboxes.socialMediaMarketing}
                onChange={handleCheckboxChange}
                className="mr-auto ml-4 mt-4"
              />
              <img
                src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796900/nar5yeeidnb2lbaqicwn.png"
                alt="image"
                className="w-[250px] my-[15px] mx-auto"
              />
              <p className="px-4 font-semibold">
                Organic Content Social Media Marketing
              </p>
              <div className="liner px-4 h-[2px] w-[85%] mx-auto bg-black mt-1 mb-2"></div>

              <p className="text-sm pl-4">
                Attract more business when people search for your service on
                Google!
              </p>
              <div className="flex justify-end">
                <div className="price-tag px-2 py-1 mt-2 text-normal font-semibold bg-black text-white">
                  Only &#8377; 2500
                </div>
              </div>
            </label>
          </div>

          <div className="w-[20%] border min-h-[47vh] flex flex-col justify-between">
            <label>
              <input
                type="checkbox"
                name="leads"
                checked={selectedCheckboxes.leads}
                onChange={handleCheckboxChange}
                className="mr-auto ml-4 mt-4"
              />
              <img
                src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796899/uygjo5fpmpzvhtidhj0u.png"
                alt="image"
                className="w-[150px] mx-auto"
              />
              <p className="px-4 font-semibold">
                Get Extra 100+ Inquiries/ Leads
              </p>

              <div className="liner px-4 h-[2px] w-[85%] mx-auto bg-black mt-1 mb-2"></div>
              <div className="bg-themeBlue rounded-full flex justify-between mb-2 text-white px-4 mx-4">
                <button
                  onClick={() => setCounter1((count) => Math.max(count - 1, 0))}
                >
                  -
                </button>
                <span>{counter1}</span>
                <button onClick={() => setCounter1((count) => count + 1)}>
                  +
                </button>
              </div>
              <p className="text-sm pl-4">
                Get extra leads and boost sales with a small additional cost!
              </p>
              <div className="flex justify-end">
                <div className="price-tag px-2 py-1 mt-2 text-normal font-semibold bg-black text-white">
                  Only &#8377; 3500
                </div>
              </div>
            </label>
          </div>

          <div className="w-[20%] border min-h-[47vh] flex flex-col justify-between">
            <label>
              <input
                type="checkbox"
                name="views"
                checked={selectedCheckboxes.views}
                onChange={handleCheckboxChange}
                className="mr-auto ml-4 mt-4"
              />
              <img
                src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796900/ibnbgec69kfy0puz3pjo.png"
                alt="image"
                className="w-[150px] mx-auto"
              />
              <p className="px-4 font-semibold">Get Extra 1 Lakh+ Views More</p>

              <div className="liner px-4 h-[2px] w-[85%] mx-auto bg-black mt-1 mb-2"></div>
              <div className="bg-themeBlue rounded-full flex justify-between mb-2 text-white px-4 mx-4">
                <button
                  onClick={() => setCounter2((count) => Math.max(count - 1, 0))}
                >
                  -
                </button>
                <span>{counter2}</span>
                <button onClick={() => setCounter2((count) => count + 1)}>
                  +
                </button>
              </div>
              <p className="text-sm pl-4 pr-2">
                Get more views and go viral in your area with your videos!
              </p>
              <div className="flex justify-end">
                <div className="price-tag px-2 py-1 mt-2 text-normal font-semibold bg-black text-white">
                  Only &#8377; 1000
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* action buttons  */}
      <div className="bg-themeBlue flex justify-between text-white py-3 px-16">
        <div className="flex items-center">
          <button
            className="text-xl flex items-center justify-center ml-auto gap-x-2"
            onClick={prevStep}
          >
            Previous{' '}
            <img
              src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796899/aoppaxxhon3p2wk4pqm9.png"
              alt="icon"
              className="w-14"
            />
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl flex items-center justify-center ml-auto gap-x-2"
            onClick={handleNext}
          >
            Next{' '}
            <img
              src="https://res.cloudinary.com/dqihbbhs3/image/upload/v1728796898/py8pjodwe5uuc0zmtkua.png"
              alt="icon"
              className="w-14"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepSeven;
