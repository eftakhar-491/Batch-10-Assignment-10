import React, { useContext } from "react";
import "../visa/AllvisaCard.css";
import { stateContext } from "../../Context/StateContext";
import { useNavigate } from "react-router-dom";
export default function LatestVisaCard({ data }) {
  const { theme } = useContext(stateContext);
  const navigate = useNavigate();
  function handelVisaDetails(dataId) {
    navigate(`/visa-details/${dataId}`);
  }
  return (
    <>
      <div className="card shadow-lg">
        <div
          className={`${
            theme ? "bg-[#0f0f0f]" : "bg-white"
          } card2 border-2 px-3 py-5`}
        >
          <img
            className="w-full h-52 rounded-md"
            src={data?.countryImage}
            alt="Country Image"
          />
          <h1
            className={`${
              theme ? "text-white" : "text-black"
            } text-lg font-bold mt-3`}
          >
            Country Name: {data?.countryName || "Not found"}
          </h1>
          <h2
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Visa Type: {data?.visaType || "Not found"}
          </h2>
          <h2
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Validity: {data?.validity || "Not found"}
          </h2>
          <h3
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Fee's: {data?.fee || "Not found"} Tk
          </h3>
          <h3
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Processing Time: {data?.fee || "Not found"}
          </h3>

          <h3
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Application Method: {data?.applicationMethod || "Not found"}
          </h3>
          <div
            onClick={() => handelVisaDetails(data?._id)}
            className="flex justify-center items-center mt-4 "
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
                        View all Details
                      </span>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
