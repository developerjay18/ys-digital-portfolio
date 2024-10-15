import axios from 'axios';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StepNine = ({ nextStep, prevStep, setSelection }) => {
  const form = useRef();
  const navigate = useNavigate();
  const state = useSelector((state) => state.join);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(state.runAdsBefore);
    await axios
      .post(
        'https://api.sheetbest.com/sheets/5aa20e07-e86d-47c5-bc6c-57916455f70d',
        {
          RunAdsBefore: state.runAdsBefore === true ? 'TRUE' : 'FALSE',
          Type: state.businessType,
          Description: state.businessDescription,
          WantGMB: state.selectedOptions.googleMyBusiness,
          WantSMM: state.selectedOptions.socialMediaMarketing,
          WantExtraLeads: state.selectedOptions.leads,
          ExtraLeadsCounts: state.selectedOptions.leadsCount,
          WantExtraViews: state.selectedOptions.views,
          ExtraViewsCounts: state.selectedOptions.viewsCount,
          Total: state.selectedOptions.total,
          OwnerName: form.current.OwnerName.value,
          Gender: form.current.Gender.value,
          Birthdate: form.current.Birthdate.value,
          Name: form.current.Name.value,
          Email: form.current.Email.value,
          ContactNumber: form.current.ContactNumber.value,
          ContactNumber2: form.current.ContactNumber2.value,
          Whatsapp: form.current.Whatsapp.value,
          LongAddress: form.current.LongAddress.value,
          ShortAddress: form.current.ShortAddress.value,
          BusinessHours: form.current.BusinessHours.value,
          Tagline: form.current.Tagline.value,
          Website: form.current.Website.value,
          Goal: form.current.Goal.value,
          Products: form.current.Products.value,
          Customers: form.current.Customers.value,
          Language: form.current.Language.value,
          Uniqueness: form.current.Uniqueness.value,
          Competitior: form.current.Competitior.value,
          ServeOutside: form.current.ServeOutside.value,
          Highlights: form.current.Highlights.value,
          FbNumber: form.current.FbNumber.value,
          FbPasswords: form.current.FbPasswords.value,
          InstaNumber: form.current.InstaNumber.value,
          InstaPasswords: form.current.InstaPasswords.value,
          MailPassword: form.current.MailPassword.value,
        }
      )
      .then((res) => console.log(res));

    navigate('/join/thankyou');
  };

  return (
    <div className="w-[95%] lg:w-[70%] font-poppins mx-auto min-h-[77vh] flex flex-col justify-end">
      <div className="join-shadow font-poppins p-6">
        {/* heading  */}
        <div className="">
          <h2 className="text-2xl font-medium mx-auto mb-4 text-center lg:w-[70%]">
            Fill up the Form to get your details to us fo further Process
          </h2>
          <div className="liner lg:w-[70%] h-[2px] bg-black mx-auto"></div>
        </div>

        {/* options  */}
        <div className="videos mt-8 lg:mx-16 flex justify-center gap-x-8">
          <div className="w-[90%] flex flex-col justify-center">
            <form method="post" onSubmit={handleSubmit} ref={form}>
              <h2 className="mb-2 font-semibold text-xl">1. Contact Details</h2>
              <input
                type="text"
                name="OwnerName"
                id="OwnerName"
                placeholder="Name"
                className="border-b px-3 py-2 w-full my-2"
              />
              <h3 className="text-lg font-semibold mt-2">Gender</h3>
              <label htmlFor="Gender" className="flex gap-x-6">
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="Gender"
                    id="Gender"
                    value={'male'}
                  />
                  <span>Male</span>
                </div>

                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="Gender"
                    id="Gender"
                    value={'female'}
                  />
                  <span>Female</span>
                </div>
              </label>
              <input
                type="text"
                name="Birthdate"
                id="Birthdate"
                placeholder="Birth Date"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Business Full Name"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Business Mail"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="ContactNumber"
                id="ContactNumber"
                placeholder="Business Contact Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="ContactNumber2"
                id="ContactNumber2"
                placeholder="Business Contact Number 2"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="Whatsapp"
                id="Whatsapp"
                placeholder="Active Whatsapp Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <p>Note: This Number not should be your main Number.</p>
              <input
                type="text"
                name="LongAddress"
                id="LongAddress"
                placeholder="Business Full Address With Pincode"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="ShortAddress"
                id="ShortAddress"
                placeholder="Business Short Address"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="BusinessHours"
                id="BusinessHours"
                placeholder="Business Hours"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="Tagline"
                id="Tagline"
                placeholder="Business Tagline"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="Website"
                id="Website"
                placeholder="Business Website"
                className="border-b px-3 py-2 w-full my-2"
              />
              <h2 className="mb-2 mt-8 font-semibold text-xl">
                2. Business Details
              </h2>
              <h3 className="text-lg font-semibold">
                What&apos;s Your Business Goal?
              </h3>
              <label
                htmlFor="Goal"
                className="flex flex-col lg:flex-row gap-x-6"
              >
                <div className="flex items-center gap-x-2">
                  <input type="radio" name="Goal" id="Goal" value={'leads'} />
                  <span>Leads</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="Goal"
                    id="Goal"
                    value={'visitors'}
                  />
                  <span>Visitors</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input type="radio" name="Goal" id="Goal" value={'calls'} />
                  <span>Calls</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input type="radio" name="Goal" id="Goal" value={'orders'} />
                  <span>Orders</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="Goal"
                    id="Goal"
                    value={'awareness'}
                  />
                  <span>Awareness</span>
                </div>
              </label>
              <input
                type="text"
                name="Products"
                id="Products"
                placeholder="What products or services does your business offer?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="Customers"
                id="Customers"
                placeholder="Who are your customers?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="Language"
                id="Language"
                placeholder="What languages do your customers prefer?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="Uniqueness"
                id="Uniqueness"
                placeholder="What makes your business unique compared to competitors?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="Competitior"
                id="Competitior"
                placeholder="Who is your biggest competitor?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <h3 className="text-lg font-semibold mt-2">
                Do you serve areas outside your location?
              </h3>
              <label htmlFor="ServeOutside" className="flex gap-x-6">
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="ServeOutside"
                    id="ServeOutside"
                    value={'yes'}
                  />
                  <span>Yes</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="ServeOutside"
                    id="ServeOutside"
                    value={'no'}
                  />
                  <span>No</span>
                </div>
              </label>
              <input
                type="text"
                name="Highlights"
                id="Highlights"
                placeholder="Is there anything specific you want to highlight about your business?"
                className="border-b px-3 py-2 w-full my-2"
              />
              <h2 className="mb-2 mt-8 font-semibold text-xl">
                3. ID/Passwords
              </h2>
              <input
                type="text"
                name="FbNumber"
                id="FbNumber"
                placeholder="Personal Facebook ID/ Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="FbPasswords"
                id="FbPasswords"
                placeholder="Personal Facebook Password"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="InstaNumber"
                id="InstaNumber"
                placeholder="Instagram ID/ Number"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="InstaPasswords"
                id="InstaPasswords"
                placeholder="Instagram Password"
                className="border-b px-3 py-2 w-full my-2"
              />
              <input
                type="text"
                name="MailPassword"
                id="MailPassword"
                placeholder="Mail Password (Only fill if you want to register on Google)"
                className="border-b px-3 py-2 w-full my-2"
              />

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
      <div className="bg-themeBlue flex justify-between text-white py-3 px-5 lg:px-16">
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
      <div className="bg-black text-white py-3 px-16 mb-2">
        <div className="text-2xl font-semibold text-center">9 / 9</div>
      </div>
    </div>
  );
};

export default StepNine;
