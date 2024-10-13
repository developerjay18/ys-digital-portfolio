import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const StepNine = ({ nextStep, prevStep, setSelection }) => {
  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current.name.value);
    // navigate('/join/thankyou'); // make this live after completion of all process
  };

  return (
    <div className="w-[70%] font-poppins mx-auto min-h-[77vh] flex flex-col justify-end">
      <div className="join-shadow font-poppins p-6">
        {/* heading  */}
        <div className="">
          <h2 className="text-2xl font-medium mx-auto mb-4 text-center w-[70%]">
            Fill up the Form to get your details to us fo further Process
          </h2>
          <div className="liner w-[70%] h-[2px] bg-black mx-auto"></div>
        </div>

        {/* options  */}
        <div className="videos mt-8 mx-16 flex justify-center gap-x-8">
          <div className="w-[90%] flex flex-col justify-center">
            <form action="#" method="post" onSubmit={handleSubmit} ref={form}>
              <h2 className="mb-2 font-semibold text-xl">1. Contact Details</h2>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="gender"
                id="gender"
                placeholder="Gender"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="birthdate"
                id="birthdate"
                placeholder="Birth Date"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business name"
                id="business name"
                placeholder="Business Full Name"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business mail"
                id="business mail"
                placeholder="Business Mail"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business contact"
                id="business contact"
                placeholder="Business Contact Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business contact two"
                id="business contact two"
                placeholder="Business Contact Number 2"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="active whatsapp number"
                id="active whatsapp number"
                placeholder="Active Whatsapp Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="whatsapp business number"
                id="whatsapp business number"
                placeholder="Whatsapp Business Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <p>Note: This Number not should be your main Number.</p>
              <input
                type="text"
                name="business address with pincode"
                id="business address with pincode"
                placeholder="Business Full Address With Pincode"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business short address"
                id="business short address"
                placeholder="Business Short Address"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business hours"
                id="business hours"
                placeholder="Business Hours"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business tagline"
                id="business tagline"
                placeholder="Business Tagline"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business website"
                id="business website"
                placeholder="Business Website"
                className="border-b px-3 py-2 w-full my-2"
              />
              <h2 className="mb-2 mt-8 font-semibold text-xl">
                2. Business Details
              </h2>
              <h3 className="text-lg font-semibold">
                What&apos;s Your Business Goal?
              </h3>
              <label htmlFor="goal" className="flex gap-x-6">
                <div className="flex items-center gap-x-2">
                  <input type="radio" name="goal" id="goal" value={'leads'} />
                  <span>Leads</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="goal"
                    id="goal"
                    value={'visitors'}
                  />
                  <span>Visitors</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input type="radio" name="goal" id="goal" value={'calls'} />
                  <span>Calls</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input type="radio" name="goal" id="goal" value={'orders'} />
                  <span>Orders</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="goal"
                    id="goal"
                    value={'awareness'}
                  />
                  <span>Awareness</span>
                </div>
              </label>
              <input
                type="text"
                name="business product"
                id="business product"
                placeholder="What products or services does your business offer?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business customer type"
                id="business customer type"
                placeholder="Who are your customers?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business language"
                id="business language"
                placeholder="What languages do your customers prefer?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business uniqueness"
                id="business uniqueness"
                placeholder="What makes your business unique compared to competitors?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="business competitor"
                id="business competitor"
                placeholder="Who is your biggest competitor?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <h3 className="text-lg font-semibold mt-2">
                Do you serve areas outside your location?
              </h3>
              <label htmlFor="serving location" className="flex gap-x-6">
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="serving location"
                    id="serving location"
                    value={'yes'}
                  />
                  <span>Yes</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="serving location"
                    id="serving location"
                    value={'yes'}
                  />
                  <span>Yes</span>
                </div>
              </label>
              <input
                type="text"
                name="business highlight"
                id="business highlight"
                placeholder="Is there anything specific you want to highlight about your business?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <h2 className="mb-2 mt-8 font-semibold text-xl">
                3. ID/Passwords
              </h2>
              <input
                type="text"
                name="fb id-number"
                id="fb id-number"
                placeholder="Personal Facebook ID/ Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="fb password"
                id="fb password"
                placeholder="Personal Facebook Password"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="insta id-number"
                id="insta id-number"
                placeholder="Instagram ID/ Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="insta password"
                id="insta password"
                placeholder="Instagram Password"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="mail password"
                id="mail password"
                placeholder="Mail Password (Only fill if you want to register on Google)"
                className="border-b px-3 py-2 w-full my-2"
              />
              <h2 className="mb-2 mt-8 font-semibold text-xl">
                4. Upload Items
              </h2>
              <button
                className="text-xl bg-themeBlue text-white px-3 py-2 flex items-center justify-center mt-5 mr-auto gap-x-2"
                type="submit"
              >
                Submit
              </button>
            </form>
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
        <div className="flex items-center"></div>
      </div>
    </div>
  );
};

export default StepNine;
