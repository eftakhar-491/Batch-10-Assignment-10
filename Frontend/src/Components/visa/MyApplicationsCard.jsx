import React, { useContext } from "react";
import "./AllVisaCard.css";
import { stateContext } from "../../Context/StateContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
export default function MyApplicationsCard({ data, setApplyVisaData, setX }) {
  const { theme } = useContext(stateContext);

  function handelVisaCalcell(dataId) {
    fetch(`https://b-10-assignment-10.vercel.app/applyVisas/${dataId}`, {
      method: "DELETE",
    })
      .then(() => {
        toast.warning("cancelled apply");
        setApplyVisaData((pre) => pre.filter((item) => item._id !== dataId));
        setX((pre) => pre.filter((item) => item._id !== dataId));
      })
      .catch(() => {});
  }
  return (
    <>
      <div className="card shadow-lg h-fit">
        <div
          className={`${
            theme ? "bg-[#0f0f0f]" : "bg-white"
          } card2 border-2 px-3 py-5`}
        >
          <img
            className="w-full h-52 rounded-md"
            src={data?.visaDetails?.countryImage}
            alt="Country Image"
          />
          <h1
            className={`${
              theme ? "text-white" : "text-black"
            } text-lg font-bold mt-3`}
          >
            Country Name: {data?.visaDetails?.countryName || "Not found"}
          </h1>
          <h2
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Name: {data?.firstName + " " + data?.lastName || "Not found"}
          </h2>
          <h2
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Email: {data?.email || "Not found"}
          </h2>
          <h2
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Visa Type: {data?.visaDetails?.visaType || "Not found"}
          </h2>
          <h2
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Validity: {data?.visaDetails?.validity || "Not found"}
          </h2>
          <h3
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Fee's: {data?.visaDetails?.fee + " " + "Tk" || "Not found"}
          </h3>
          <h3
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Processing Time: {data?.visaDetails?.processingTime || "Not found"}
          </h3>
          <h3
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Application Method:{" "}
            {data?.visaDetails?.applicationMethod || "Not found"}
          </h3>
          <h3
            className={`${
              theme ? "text-white" : "text-black"
            }  text-sm font-semibold`}
          >
            Applied Date:{" "}
            {moment(data?.time).format("M/D/YY h:mm") || "Not found"}
          </h3>

          <div
            onClick={() => handelVisaCalcell(data?._id)}
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
                        Cancel Apply
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
