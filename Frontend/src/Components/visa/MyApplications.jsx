import React, { useContext, useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import MyApplicationsCard from "./MyApplicationsCard";
import { stateContext } from "../../Context/StateContext";
import { Helmet } from "react-helmet-async";
import bg5 from "../../assets/ss.jpg";
import Loader from "../Loader/Loader";
export default function MyApplications() {
  const [applyVisaData, setApplyVisaData] = useState([]);
  const [x, setX] = useState([]);
  const [searchData, setsearchData] = useState("");
  const [load, setLoad] = useState(true);
  const [searchErr, setSearchErr] = useState([null]);
  const { user, theme } = useContext(stateContext);
  useEffect(() => {
    fetch(`https://b-10-assignment-10.vercel.app/applyVisas/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setApplyVisaData(data);
        setX(data);
        setLoad(false);
      })
      .catch(() => {});
  }, []);

  function handelSearch(e) {
    e.preventDefault();

    const search = applyVisaData?.filter(
      (item) =>
        item?.visaDetails?.countryName.toLowerCase() ===
        searchData.toLowerCase()
    );

    if (search.length === 0) {
      setSearchErr("no matched found");
      setApplyVisaData(x);
    } else {
      setApplyVisaData(search);
    }
  }
  useEffect(() => {
    if (!searchData) {
      setApplyVisaData(x);
    }
  }, [searchData]);

  return (
    <>
      <Helmet>
        <title>My Applications</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `linear-gradient(to top,
         
          ${theme ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.0)"},
          ${theme ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.0)"}
           ) ,url(${bg5}) `,
        }}
        className={`bg-center bg-cover ${
          theme ? "text-white" : "text-white"
        } py-20 shadow-lg mb-8`}
      >
        <h1 className="text-center text-2xl font-bold "> My AppliCations</h1>
        <p className="text-sm text-center">
          Here , the all visas application you are applyed before{" "}
        </p>
      </div>
      <section className="w-11/12 mx-auto lg:w-4/5">
        <form onSubmit={handelSearch} className="flex items-center gap-3">
          <label
            htmlFor="search"
            className={`font-semibold text-sm ${
              theme ? "text-gray-400" : "text-black"
            }  pb-1 block`}
          >
            Search By Country Name
            <input
              value={searchData}
              onChange={(e) => {
                setsearchData(e.target.value);
                setSearchErr(null);
              }}
              placeholder="Example: Japan"
              required
              name="search"
              id="search"
              type="text"
              className={`border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none ${
                theme
                  ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                  : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
              } `}
            />
          </label>
          <button
            type="submit"
            className=" block h-[40px] py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white flex-shrink-0 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Search
          </button>
        </form>
        {searchErr && (
          <p className="-mt-4 text-sm text-red-500 font-bold">{searchErr}</p>
        )}
        {load && <Loader />}
        <div className="mt-10 flex justify-start gap-4 flex-wrap">
          {applyVisaData.length === 0
            ? !load && (
                <div className="mt-24">
                  <p className={`"py-6 ${theme ? "text-white" : "text-black"}`}>
                    <span className="text-red-400">Not Found ! </span>
                    You are not applyed any visa.!
                  </p>
                </div>
              )
            : applyVisaData?.map((item, i) => (
                <MyApplicationsCard
                  setApplyVisaData={setApplyVisaData}
                  setX={setX}
                  data={item}
                  key={i + "q"}
                />
              ))}
        </div>
      </section>
    </>
  );
}
