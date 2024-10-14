import axios from 'axios';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StepNine = ({ nextStep, prevStep, setSelection }) => {
  const form = useRef();
  const navigate = useNavigate();
  const state = useSelector((state) => state.join);
  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbwPO0AQ3kaqYUZDPJvC4Gk-H9QyCjv-77d6Spa2_ELwvNZEUyTyLxWdMgWnr7v8mMwC/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('RunAdsBefore', state.runAdsBefore);
    formData.append('Type', state.businessType);
    formData.append('Description', state.businessDescription);
    formData.append('WantGMB', state.selectedOptions.googleMyBusiness);
    formData.append('WantSMM', state.selectedOptions.socialMediaMarketing);
    formData.append('WantExtraLeads', state.selectedOptions.leads);
    formData.append('ExtraLeadsCounts', state.selectedOptions.leadsCount);
    formData.append('WantExtraViews', state.selectedOptions.views);
    formData.append('ExtraViewsCounts', state.selectedOptions.viewsCount);
    formData.append('OwnerName', form.current.name.value);
    formData.append('Gender', form.current.gender.value);
    formData.append('Birthdate', form.current.birthdate.value);
    formData.append('Name', form.current.businessName.value);
    formData.append('Email', form.current.eemail.value);
    formData.append('ContactNumber', form.current.contact.value);
    formData.append('ContactNumber2', form.current.contactTwo.value);
    formData.append('Whatsapp', form.current.whatsappNumber.value);
    formData.append('LongAddress', form.current.longAddress.value);
    formData.append('ShortAddress', form.current.shortAddress.value);
    formData.append('BusinessHours', form.current.businessHours.value);
    formData.append('Tagline', form.current.tagline.value);
    formData.append('Website', form.current.website.value);
    formData.append('Goal', form.current.goal.value);
    formData.append('Products', form.current.product.value);
    formData.append('Customers', form.current.customer.value);
    formData.append('Language', form.current.language.value);
    formData.append('Uniqueness', form.current.uniqueness.value);
    formData.append('Competitior', form.current.competitor.value);
    formData.append('ServeOutside', form.current.serveOutside.value);
    formData.append('Highlights', form.current.highlights.value);
    formData.append('FbNumber', form.current.fbNumber.value);
    formData.append('FbPasswords', form.current.fbPassword.value);
    formData.append('InstaNumber', form.current.instaNumber.value);
    formData.append('InstaPasswords', form.current.instaPassword.value);
    formData.append('MailPassword', form.current.mailPassword.value);
    formData.append('Photo', 'NAN');
    formData.append('Logo', 'NAN');
    formData.append('Lightbill', 'NAN');

    fetch(scriptUrl, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        console.log('SUCCESSFULLY SUBMITTED', res);
      })
      .catch((err) => console.log(err));

    navigate('/join/thankyou'); // make this live after completion of all process
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
              <h3 className="text-lg font-semibold mt-2">Gender</h3>
              <label htmlFor="gender" className="flex gap-x-6">
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    value={'male'}
                  />
                  <span>Male</span>
                </div>

                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    value={'female'}
                  />
                  <span>Female</span>
                </div>
              </label>
              <input
                type="text"
                name="birthdate"
                id="birthdate"
                placeholder="Birth Date"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="businessName"
                id="businessName"
                placeholder="Business Full Name"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="eemail"
                id="eemail"
                placeholder="Business Mail"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Business Contact Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="contactTwo"
                id="contactTwo"
                placeholder="Business Contact Number 2"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="whatsappNumber"
                id="whatsappNumber"
                placeholder="Active Whatsapp Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <p>Note: This Number not should be your main Number.</p>
              <input
                type="text"
                name="longAddress"
                id="longAddress"
                placeholder="Business Full Address With Pincode"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="shortAddress"
                id="shortAddress"
                placeholder="Business Short Address"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="businessHours"
                id="businessHours"
                placeholder="Business Hours"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="tagline"
                id="tagline"
                placeholder="Business Tagline"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="website"
                id="website"
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
                name="product"
                id="product"
                placeholder="What products or services does your business offer?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="customer"
                id="customer"
                placeholder="Who are your customers?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="language"
                id="language"
                placeholder="What languages do your customers prefer?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="uniqueness"
                id="uniqueness"
                placeholder="What makes your business unique compared to competitors?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="competitor"
                id="competitor"
                placeholder="Who is your biggest competitor?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <h3 className="text-lg font-semibold mt-2">
                Do you serve areas outside your location?
              </h3>
              <label htmlFor="serveOutside" className="flex gap-x-6">
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="serveOutside"
                    id="serveOutside"
                    value={'yes'}
                  />
                  <span>Yes</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="serveOutside"
                    id="serveOutside"
                    value={'yes'}
                  />
                  <span>Yes</span>
                </div>
              </label>
              <input
                type="text"
                name="highlights"
                id="highlights"
                placeholder="Is there anything specific you want to highlight about your business?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <h2 className="mb-2 mt-8 font-semibold text-xl">
                3. ID/Passwords
              </h2>
              <input
                type="text"
                name="fbNumber"
                id="fbNumber"
                placeholder="Personal Facebook ID/ Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="fbPassword"
                id="fbPassword"
                placeholder="Personal Facebook Password"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="instaNumber"
                id="instaNumber"
                placeholder="Instagram ID/ Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="instaPassword"
                id="instaPassword"
                placeholder="Instagram Password"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="mailPassword"
                id="mailPassword"
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
