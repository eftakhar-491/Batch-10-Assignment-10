import React, { useContext, useEffect, useState } from "react";
import LatestVisaCard from "./LatestVisaCard";
import { stateContext } from "../../Context/StateContext";
import { useNavigate } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

export default function LatestVisas() {
  const { theme } = useContext(stateContext);
  const [latestVisa, setLatestVisa] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://b-10-assignment-10.vercel.app/visas/count/6`)
      .then((res) => res.json())
      .then((data) => setLatestVisa(data))
      .catch(() => {
        toast.error("something error reload the page");
      });
  }, []);
  return (
    <>
      <section className="mt-10">
        <div className={`${theme ? "text-white" : "text-black"}`}>
          <Zoom>
            <h1 className="text-3xl font-bold text-center">Latest Visas</h1>
          </Zoom>
          <Fade>
            <p className="text-center mx-auto max-w-[600px] text-sm">
              {" "}
              Stay informed about the latest opportunities and regulations for
              global mobility{" "}
            </p>
          </Fade>
        </div>

        {latestVisa.length === 0 && <Loader />}
        <div className="mt-8 gap-4 grid w-11/12 mx-auto justify-items-center lg:w-4/5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {latestVisa?.map((item, i) => (
            <Zoom key={"xx" + i}>
              <LatestVisaCard key={i + "p"} data={item} />
            </Zoom>
          ))}
        </div>
        <div
          onClick={() => navigate("/all-visas")}
          className="mt-12 flex justify-center items-center"
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
                      See all visas
                    </span>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
