import React, { useContext, useEffect, useState } from "react";
import { stateContext } from "../../Context/StateContext";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { toast } from "react-toastify";

export default function Footer() {
  const [fEmail, setFEmail] = useState();
  const { user, theme, setFeedback } = useContext(stateContext);
  const navigate = useNavigate();
  useEffect(() => {
    setFEmail(user?.email);
  }, [user]);
  function handelFeedback(e) {
    e.preventDefault();

    const feedbackData = {
      photo: user?.photoURL,
      userEmail: fEmail,
      userName: user?.displayName,
      message: e.target.feedback.value.trim(),
      time: moment().valueOf(),
    };

    fetch(`https://b-10-assignment-10.vercel.app/feedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    })
      .then(() => {
        setFeedback((pre) => [...pre, feedbackData]);
        toast.success("thank you for your feedback");
        e.target.reset();
      })
      .catch(() => {
        toast.error("Opps! Try Again");
      });
  }
  return (
    <>
      <section
        className={`mt-32 ${
          theme ? " bg-black " : "bg-white border-t-2 mt-14"
        }`}
      >
        <div className=" flex flex-col md:flex-row md:items-center py-14 justify-between lg:w-4/5 w-11/12 mx-auto">
          <div className={`${theme ? "text-white" : "text-black"}`}>
            <h1 className="mb-4 font-bold text-2xl font-pacifico">
              Visa Palace
            </h1>
            <p className="text-lg font-semibold">Contact Us:</p>
            <p className="text-sm font-semibold">491/D Block Uttora, Dhaka</p>
            <p className="text-sm font-semibold">info@visapalace.com</p>
            <p className="text-sm font-semibold">01569-156123 | 01715-123500</p>
            {/* social media links */}

            <ul className="flex justify-start mt-5 space-x-5">
              <li>
                <Link
                  to={"https://www.facebook.com/"}
                  className={`text-gray-500 ${
                    theme ? "hover:text-white" : "hover:text-gray-900 "
                  } `}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.instagram.com/"}
                  className={`text-gray-500 ${
                    theme ? "hover:text-white" : "hover:text-gray-900 "
                  } `}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.twiter.com/"}
                  className={`text-gray-500 ${
                    theme ? "hover:text-white" : "hover:text-gray-900 "
                  } `}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.github.com/"}
                  className={`text-gray-500 ${
                    theme ? "hover:text-white" : "hover:text-gray-900 "
                  } `}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${theme ? "text-white" : "text-black"}`}>
            <h1 className="mt-5 md:mt-0 text-2xl font-bold mb-4">All Pages</h1>
            <ul>
              <li
                onClick={() => navigate("/")}
                className="hover:text-slate-400 cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => navigate("/all-visas")}
                className="cursor-pointer hover:text-slate-400"
              >
                All Visas
              </li>
              <li
                onClick={() => navigate("/add-visa")}
                className="cursor-pointer hover:text-slate-400"
              >
                Add Visa
              </li>
              <li
                onClick={() => navigate("/my-added-visa")}
                className="hover:text-slate-400 cursor-pointer"
              >
                My Added Visa
              </li>
              <li
                onClick={() => navigate("/my-visa-application")}
                className="hover:text-slate-400 cursor-pointer"
              >
                My Visa Application
              </li>
            </ul>
          </div>
          <Zoom>
            <div
              className={`${theme ? "bg-[#000]" : ""} p-4 rounded-md shadow-md`}
            >
              <form onSubmit={handelFeedback}>
                <label className="text-xl font-bold mb-4 block">FeedBack</label>
                {user ? (
                  <img
                    className="w-10 h-10 rounded-full mb-3"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`mb-3 ${
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
                <label
                  htmlFor="login"
                  className={`font-semibold text-sm ${
                    theme ? "text-gray-400" : "text-black"
                  }  pb-1 block`}
                >
                  E-mail
                  <input
                    value={fEmail}
                    onChange={(e) => setFEmail(e.target.value)}
                    id="login"
                    type="email"
                    className={`border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none ${
                      theme
                        ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                        : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                    } `}
                  />
                </label>
                <label
                  htmlFor="feedback"
                  className={`block ${
                    theme ? "text-gray-400" : "text-black"
                  } text-sm mb-2 font-semibold md:col-span-2`}
                >
                  Feedback
                  <textarea
                    required
                    name="feedback"
                    rows="5"
                    placeholder="Write your Feedback"
                    id="feedback"
                    className={`${
                      theme
                        ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                        : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                    } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2`}
                  ></textarea>
                </label>
                <div className="flex  items-center">
                  <div className="flex items-center justify-center">
                    <div className="relative group flex-shrink-0">
                      <button
                        type="submit"
                        className=" relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                      >
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                        <span
                          className={` relative z-10 block px-10 py-2 rounded-xl ${
                            theme ? "bg-black" : "bg-white text-black"
                          } `}
                        >
                          <div className=" relative z-10 flex items-center space-x-2">
                            <span className="w-full transition-all duration-500 group-hover:translate-x-1">
                              Send Feedback
                            </span>
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Zoom>
        </div>
        <div className={`${theme ? "text-white" : "text-black"}`}>
          <hr />
          <p className="py-5 text-center text-sm">
            All Rights Reserve
            <span className="font-pacifico text-lg"> @visapalace</span>
          </p>
        </div>
      </section>
    </>
  );
}
