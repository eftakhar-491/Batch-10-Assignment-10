import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import { stateContext } from "../../Context/StateContext";

import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Loader from "../Loader/Loader";

export default function ClientFeedback() {
  const { feedback, setFeedback, theme } = useContext(stateContext);

  useEffect(() => {
    fetch(`https://b-10-assignment-10.vercel.app/feedback`)
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, []);
  return (
    <>
      <section className={`${theme ? "bg-black" : "bg-white"} py-10  mt-16 `}>
        <div className={`${theme ? "text-white" : "text-black"}`}>
          <Zoom>
            <h1 className="text-3xl font-bold text-center">Client Feedback</h1>
          </Zoom>
          <p className="max-w-[600px] mx-auto text-center text-sm">
            This section highlights the experiences of individuals and families
            who have successfully used our visa processing services. It provides
            an authentic insight into the efficiency, reliability, and quality
            of support offered throughout the application process.
          </p>
        </div>
        <Zoom>
          <div className="mt-14">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className={`${
                theme
                  ? "text-white bg-black rounded-md "
                  : "shadow-lg text-black"
              } mySwiper max-w-[600px] `}
            >
              {feedback?.map((item) => (
                <SwiperSlide key={"a" + item.time}>
                  {" "}
                  <div className="p-4 px-16">
                    {item?.photo ? (
                      <img
                        className="w-10 h-10 rounded-full"
                        src={item?.photo}
                        alt=""
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          theme ? "text-white" : "text-black"
                        } size-10`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                    <h1 className="text-lg font-semibold mt-3">
                      Name: {item?.userName}
                    </h1>
                    <p className="text-sm font-medium">
                      Comment: {item?.message}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Zoom>
      </section>
    </>
  );
}
