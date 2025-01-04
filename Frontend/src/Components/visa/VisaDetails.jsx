import React, { useContext, useEffect, useState } from "react";
import { stateContext } from "../../Context/StateContext";
import { useParams } from "react-router-dom";

import moment from "moment";
import { toast } from "react-toastify";
export default function VisaDetails() {
  const { theme, user } = useContext(stateContext);
  const [singleVisaData, setSingleVisaData] = useState();
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    fetch(`https://b-10-assignment-10.vercel.app/visas/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleVisaData(data))
      .catch(() => {
        toast.error("Opps! reload the page");
      });
  }, []);

  const date = moment.utc().format("YYYY-MM-DD");

  function handelApplyVisa(e) {
    e.preventDefault();

    const applyVisaData = {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      fee: singleVisaData?.fee,
      visaDetails: singleVisaData,
      time: moment().valueOf(),
    };

    fetch(`https://b-10-assignment-10.vercel.app/applyVisas`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applyVisaData),
    })
      .then(() => {
        toast.success("Applyed Successfull");
        setModal(false);
      })
      .catch(() => {
        toast.error("some thing not found! try again!");
      });
  }
  return (
    <>
      <section
        className={`${
          theme ? "text-white bg-[#0f0f0f]" : ""
        } w-11/12 lg:w-4/5 mx-auto p-6 rounded-xl shadow-lg`}
      >
        <h1 className="text-2xl font-bold text-center"> Visa Details</h1>
        <p className="text-center text-[12px] mb-2">
          {" "}
          You can see all details and reqarment for this visa
        </p>
        <div className=" py-3 flex flex-col lg:flex-row gap-5 justify-center items-center">
          <div className="md:w-1/2">
            <img className="w-full" src={singleVisaData?.countryImage} alt="" />
          </div>
          <div className="md:w-4/5 lg:w-1/2">
            <h1 className={`text-xl font-bold`}>
              Country Name: {singleVisaData?.countryName}
            </h1>
            <p className={`text-sm font-semibold mb-3`}>
              {singleVisaData?.description}
            </p>
            <hr />
            <h2 className="text-xl font-bold">Required Documents</h2>
            <ul className={`mb-3 text-[16px] font-medium list-disc pl-5 mt-2`}>
              {singleVisaData?.requiredDocuments?.map(
                (item, i) => item && <li key={i + "i"}>{item}</li>
              )}
            </ul>
            <p className="font-bold">
              Visa Type:{" "}
              <span className="font-semibold">{singleVisaData?.visaType}</span>{" "}
            </p>
            <p className="font-bold">
              Processing Time: <span>{singleVisaData?.processingTime}</span>{" "}
            </p>
            <p className="font-bold">
              Age Restriction: <span>{singleVisaData?.ageRestriction}</span>{" "}
            </p>
            <p className="font-bold">
              validity: <span>{singleVisaData?.validity}</span>{" "}
            </p>
            <p className="font-bold">
              Application Method:{" "}
              <span>{singleVisaData?.applicationMethod}</span>{" "}
            </p>
            <p className="font-bold">
              Fee's: <span> {singleVisaData?.fee} TK </span>{" "}
            </p>
            <p className="font-bold">
              who is Added : <span> {singleVisaData?.userEmail} </span>{" "}
            </p>
            <p className="font-bold">
              Created At :{" "}
              <span>{moment(singleVisaData?.time).format("M/D/YY h:mm")}</span>{" "}
            </p>
            <div
              onClick={() => setModal(true)}
              className="flex items-center mt-4 "
            >
              <div className="flex items-center justify-center">
                <div className="relative group flex-shrink-0">
                  <button className=" relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                    <span
                      className={` relative z-10 block px-6 py-2 rounded-xl ${
                        theme ? "bg-black" : "bg-white text-black"
                      } `}
                    >
                      <div className=" relative z-10 flex items-center space-x-2">
                        <span className="w-full transition-all duration-500 group-hover:translate-x-1">
                          Apply Now
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modal && (
        <section
          className={` top-0 left-0 fixed flex justify-center items-center w-screen h-screen z-50 ${
            theme ? "bg-[#000000f0]" : "bg-[#0000008f]"
          }  `}
        >
          <div
            className={`rounded-lg ${
              theme ? "bg-black" : "bg-white"
            } w-11/12 md:max-w-[600px] mx-auto shadow-md `}
          >
            <div
              className={`${theme ? "bg-black" : ""}  px-6 py-7 rounded-lg `}
            >
              <h1
                className={`${
                  theme ? "text-white" : "text-black"
                } text-3xl font-bold text-center`}
              >
                Apply Visa Form
              </h1>
              <form
                onSubmit={handelApplyVisa}
                className="grid grid-cols-2 gap-2 mt-4"
              >
                <label
                  htmlFor="firstName"
                  className={`font-semibold text-sm ${
                    theme ? "text-gray-400" : "text-black"
                  }  pb-1 block col-span-2 md:col-span-1`}
                >
                  First Name
                  <input
                    placeholder="Example : Eahim"
                    required
                    name="firstName"
                    id="firstName"
                    type="text"
                    className={`border-2 rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full outline-none ${
                      theme
                        ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                        : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                    }`}
                  />
                </label>
                <label
                  htmlFor="lastName"
                  className={`font-semibold text-sm ${
                    theme ? "text-gray-400" : "text-black"
                  }  pb-1 block col-span-2 md:col-span-1`}
                >
                  last Name
                  <input
                    placeholder="Example : khan"
                    required
                    name="lastName"
                    id="lastName"
                    type="text"
                    className={`border-2 rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full outline-none ${
                      theme
                        ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                        : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                    }`}
                  />
                </label>
                <label
                  htmlFor="email"
                  className={`font-semibold text-sm md:col-span-2 ${
                    theme ? "text-gray-400" : "text-black"
                  }  pb-1 block col-span-2 `}
                >
                  Email
                  <input
                    defaultValue={user?.email}
                    placeholder="Example : example@gmail.com"
                    required
                    name="email"
                    id="email"
                    type="email"
                    className={`border-2 rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full outline-none ${
                      theme
                        ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                        : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                    } `}
                  />
                </label>
                <label
                  htmlFor="date"
                  className={`font-semibold text-sm ${
                    theme ? "text-gray-400" : "text-black"
                  }  pb-1 block`}
                >
                  Today Date
                  <input
                    placeholder="Example : khan"
                    disabled
                    defaultValue={date}
                    name="date"
                    id="date"
                    type="text"
                    className={`border-2 rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full outline-none ${
                      theme
                        ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                        : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                    }`}
                  />
                </label>
                <label
                  htmlFor="date"
                  className={`font-semibold text-sm ${
                    theme ? "text-gray-400" : "text-black"
                  }  pb-1 block `}
                >
                  Fee's
                  <input
                    placeholder="Example : khan"
                    disabled
                    defaultValue={singleVisaData?.fee}
                    name="date"
                    id="date"
                    type="number"
                    className={`border-2 rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full outline-none ${
                      theme
                        ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                        : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                    }`}
                  />
                </label>
                <div className="flex col-span-2 gap-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setModal(false);
                    }}
                    className="md:col-span-2 block py-2 px-4 bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="md:col-span-2 block py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
