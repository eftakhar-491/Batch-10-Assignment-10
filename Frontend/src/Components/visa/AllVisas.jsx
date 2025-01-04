import React, { useContext, useEffect, useState } from "react";
import AllVisaCard from "./AllVisaCard";
import { useLoaderData } from "react-router-dom";
import { stateContext } from "../../Context/StateContext";
import { Helmet } from "react-helmet-async";
import bg1 from "../../assets/ss.jpg";
export default function AllVisas() {
  const allVisasLoader = useLoaderData();
  const [allVisas, setAllVisas] = useState([]);
  const { theme } = useContext(stateContext);
  const [type, setType] = useState("");
  useEffect(() => {
    if (!type) {
      setAllVisas(allVisasLoader);
    } else {
      setAllVisas(allVisasLoader.filter((item) => item.visaType === type));
    }
  }, [type]);

  return (
    <>
      <Helmet>
        <title>All Visas</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `linear-gradient(to top,
         
          ${theme ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.0)"},
          ${theme ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.0)"}
           ) ,url(${bg1}) `,
        }}
        className={`bg-center bg-cover ${
          theme ? "text-white" : "text-white"
        } py-20 shadow-lg mb-4`}
      >
        <h1 className="text-center text-2xl font-bold "> All VISA</h1>
        <p className="text-sm text-center">
          Here , the all visas are available{" "}
        </p>
      </div>
      <section>
        <div className="mx-auto lg:w-4/5">
          <label
            htmlFor="applicationMethod"
            className={`font-semibold text-sm ${
              theme ? "text-gray-400" : "text-black"
            }  pb-1 block w-72 ml-auto`}
          >
            Filter by Visa Type
            <select
              name="applicationMethod"
              onChange={(e) => setType(e.target.value)}
              className={`w-full block font-semibold ${
                theme
                  ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                  : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
              } mt-1  border-2 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 `}
              id="applicationMethod"
            >
              <option value="">All Visa</option>
              <option value="Tourist visa">Tourist visa</option>
              <option value="Student visa">Student visa</option>
              <option value="Official visa">Official visa</option>
            </select>
          </label>
        </div>
        <div className="w-11/12 lg:w-4/5 mx-auto justify-items-center gap-3 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allVisas?.map((item) => (
            <AllVisaCard key={item?._id} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}
