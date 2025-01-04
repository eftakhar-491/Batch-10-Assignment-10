import React, { useContext, useState } from "react";
import { stateContext } from "../../Context/StateContext";
import moment from "moment";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import bg2 from "../../assets/ss.jpg";
export default function AddVisa() {
  const { theme, user } = useContext(stateContext);
  const [validPass, setValidPass] = useState(false);
  const [visaApplication, setVisaApplication] = useState(false);
  const [photograph, setPhotograph] = useState(false);

  function handelAddVisa(e) {
    e.preventDefault();
    const addVisaData = {
      countryImage: e.target.countryImg.value,
      countryName: e.target.countryName.value,
      visaType: e.target.visaType.value,
      processingTime: e.target.processingTime.value,

      requiredDocuments: [
        photograph ? "Recent passport-sized photograph" : null,
        visaApplication ? "Visa Application" : null,
        validPass ? "Valid Passport" : null,
      ],
      description: e.target.description.value.trim(),
      ageRestriction: e.target.ageRestriction.value,
      fee: e.target.fee.value,
      validity: e.target.validity.value,
      applicationMethod: e.target.applicationMethod.value,
      userEmail: user?.email,
      time: moment().valueOf(),
    };

    fetch(`https://b-10-assignment-10.vercel.app/visas`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addVisaData),
    })
      .then(() => {
        e.target.reset();
        toast.success("Visa Added success");
      })
      .catch(() => {
        toast.error("Some thing not good try again");
      });
  }
  return (
    <>
      <Helmet>
        <title>Add Visa</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `linear-gradient(to top,
         
          ${theme ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.0)"},
          ${theme ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.0)"}
           ) ,url(${bg2}) `,
        }}
        className={`bg-cover bg-center ${
          theme ? "text-white" : "text-white"
        } py-20 shadow-lg mb-4`}
      >
        <h1 className="text-center text-2xl font-bold ">Add VISA</h1>
        <p className="text-sm text-center">
          Here , the all visas are available{" "}
        </p>
      </div>
      <section className="w-11/12 lg:w-4/5 mx-auto">
        <div
          className={`${
            theme ? "bg-black" : ""
          } px-6 py-7 mx-auto w-11/12 md:max-w-[650px] rounded-lg shadow-md`}
        >
          <form
            onSubmit={handelAddVisa}
            className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4"
          >
            <label
              htmlFor="countryImg"
              className={`font-semibold text-sm ${
                theme ? "text-gray-400" : "text-black"
              }  pb-1 block`}
            >
              Country Image Url
              <input
                placeholder="Example:https://encrypted-tbn0.gstatic.com/images?a"
                required
                name="countryImg"
                id="countryImg"
                type="text"
                className={`border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none ${
                  theme
                    ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                    : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                } `}
              />
            </label>
            <label
              htmlFor="countryName"
              className={`font-semibold text-sm ${
                theme ? "text-gray-400" : "text-black"
              }  pb-1 block`}
            >
              Country Name
              <input
                placeholder="Example : bangladesh"
                required
                name="countryName"
                id="countryName"
                type="text"
                className={`border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none ${
                  theme
                    ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                    : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                }`}
              />
            </label>
            <label
              className={`${
                theme ? "text-gray-400" : "text-black"
              } text-sm mb-2 font-semibold cursor-pointer`}
              htmlFor="visaType"
            >
              Visa Type
              <select
                className={`mt-1 w-full block font-semibold ${
                  theme
                    ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                    : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                }   border-2 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 `}
                id="visaType"
                name="visaType"
              >
                <option value="Tourist visa">Tourist visa</option>
                <option value="Student visa">Student visa</option>
                <option value="Official visa">Official visa</option>
              </select>
            </label>
            <label
              htmlFor="processingTime"
              className={`font-semibold text-sm ${
                theme ? "text-gray-400" : "text-black"
              }  pb-1 block`}
            >
              Processing Time
              <input
                placeholder="Example: 12 days or 1 month and days"
                required
                name="processingTime"
                id="processingTime"
                type="text"
                className={`border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none ${
                  theme
                    ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                    : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                }`}
              />
            </label>
            <label
              className={` ${
                theme ? "text-white" : "text-black"
              } col-span-1 md:col-span-2`}
            >
              Required Documents
            </label>
            <div className={`${theme ? "text-gray-400" : "text-black"}`}>
              <label className={` flex gap-2 items-center `}>
                <input
                  name="validPassport"
                  className="w-4 h-4 border-white-400/20 scale-100 transition-all duration-500 ease-in-out hover:scale-110 checked:scale-100 "
                  type="checkbox"
                  onClick={() => setValidPass((pre) => !pre)}
                />{" "}
                <h1>Valid passport</h1>
              </label>

              <div className="flex gap-2 items-center">
                <label className="text-white">
                  <input
                    onClick={() => setVisaApplication((pre) => !pre)}
                    className="w-4 h-4 border-white-400/20 scale-100 transition-all duration-500 ease-in-out hover:scale-110 checked:scale-100 "
                    type="checkbox"
                  />{" "}
                </label>
                <h1>Visa application form</h1>
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-white">
                  <input
                    onClick={() => setPhotograph((pre) => !pre)}
                    className="w-4 h-4 border-white-400/20 scale-100 transition-all duration-500 ease-in-out hover:scale-110 checked:scale-100 "
                    type="checkbox"
                  />{" "}
                </label>
                <h1>Recent passport-sized photograph</h1>
              </div>
            </div>

            <label
              htmlFor="description"
              className={`block ${
                theme ? "text-gray-400" : "text-black"
              } text-sm mb-2 font-semibold md:col-span-2`}
            >
              Description
              <textarea
                required
                name="description"
                rows="5"
                placeholder="Enter your content"
                id="description"
                className={`${
                  theme
                    ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                    : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2`}
              ></textarea>
            </label>

            <label
              htmlFor="ageRestriction"
              className={`font-semibold text-sm ${
                theme ? "text-gray-400" : "text-black"
              }  pb-1 block`}
            >
              Minimum Age Restriction
              <input
                placeholder="Example: 18 "
                name="ageRestriction"
                id="ageRestriction"
                type="number"
                className={`border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none ${
                  theme
                    ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                    : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                }`}
              />
            </label>
            <label
              htmlFor="validity"
              className={`font-semibold text-sm ${
                theme ? "text-gray-400" : "text-black"
              }  pb-1 block`}
            >
              Validity
              <input
                placeholder="Example: 18 month or 5 years"
                name="validity"
                id="validity"
                type="text"
                className={`border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none ${
                  theme
                    ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                    : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                }`}
              />
            </label>
            <label
              htmlFor="fee"
              className={`font-semibold text-sm ${
                theme ? "text-gray-400" : "text-black"
              }  pb-1 block`}
            >
              Fee
              <input
                placeholder="Example: 15000 or 40000"
                required
                name="fee"
                id="fee"
                type="number"
                className={`border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none ${
                  theme
                    ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                    : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                }`}
              />
            </label>
            <label
              htmlFor="applicationMethod"
              className={`font-semibold text-sm ${
                theme ? "text-gray-400" : "text-black"
              }  pb-1 block `}
            >
              Application Method
              <select
                name="applicationMethod"
                className={`w-full block font-semibold ${
                  theme
                    ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                    : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                } mt-1  border-2 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 `}
                id="applicationMethod"
              >
                <option value="Online Application">Online Application</option>
                <option value="In-Person Application at an Embassy">
                  In-Person Application at an Embassy
                </option>
                <option value="Visa Application Centers (VACs)">
                  Visa Application Centers (VACs)
                </option>
                <option value="On-Arrival Visa (VOA)">
                  On-Arrival Visa (VOA)
                </option>
              </select>
            </label>

            <button
              type="submit"
              className="md:col-span-2 block py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Add Visa
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
