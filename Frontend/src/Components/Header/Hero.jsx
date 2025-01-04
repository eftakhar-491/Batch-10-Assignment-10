import React, { useContext } from "react";
import bg from "../../assets/bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import { stateContext } from "../../Context/StateContext";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
export default function Hero() {
  const { theme } = useContext(stateContext);
  const navigate = useNavigate();

  const bgBlack = "";
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(to top,
           
            ${theme ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.0)"},
            ${theme ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.0)"}
             ) ,url(${bg}) `,
        }}
        className="bg-cover"
      >
        <div>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <Zoom>
                <div
                  className={`h-[400px] text-white flex flex-col items-center justify-center`}
                >
                  <h1 className={`text-center text-3xl font-semibold `}>
                    Welcome to the Visa Palace <br />
                    <span className="block text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                      We Offer_{" "}
                      <Typewriter
                        loop={true}
                        words={["Student Visa", "Offical Visa", "Tourist Visa"]}
                      />
                    </span>
                  </h1>
                  <p className="text-center mt-3 text-sm">
                    Planning a trip abroad? Get your visa now in just 3 simple
                    steps!
                  </p>
                  <div
                    onClick={() => navigate("/all-visas")}
                    className="mt-3 flex justify-center items-center"
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
                                See All Visas
                              </span>
                            </div>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </SwiperSlide>
            <SwiperSlide>
              <Zoom>
                <div
                  className={`h-[400px] text-white flex flex-col items-center justify-center`}
                >
                  <h1 className="text-center text-3xl font-semibold">
                    You Can Apply For Visa <br />
                    <span className="block text-xl h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                      <Typewriter
                        loop={true}
                        words={[
                          "Share Your Info",
                          "Wait For Processing",
                          "Enjoy Your Trip",
                        ]}
                      />
                    </span>
                  </h1>
                  <p className="text-center text-sm">
                    You Can Apply for a visa with a very easy way!
                  </p>
                  <div
                    onClick={() => navigate("/all-visas")}
                    className="mt-3 flex justify-center items-center"
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
                                Apply Now!
                              </span>
                            </div>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </SwiperSlide>
            <SwiperSlide>
              <Zoom>
                <div
                  className={`h-[400px] text-white flex flex-col items-center justify-center`}
                >
                  <h1 className="text-center text-3xl font-semibold">
                    You can add any visa info <br />
                    <span className="block text-xl h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                      <Typewriter
                        loop={true}
                        words={["Correct info", "Share New visa info"]}
                      />
                    </span>
                  </h1>
                  <p className="text-center mt-3 text-sm">
                    If you trying share a most valuable visa info with, it can
                    be very easy!
                  </p>
                  <div
                    onClick={() =>
                      navigate("/add-visa", { state: { his: "/add-visa" } })
                    }
                    className="mt-3 flex justify-center items-center"
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
                                Add Visa Info
                              </span>
                            </div>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
