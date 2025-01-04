import React, { useContext, useState } from "react";
import { firebaseContest } from "../../Context/FirebaseContext";
import { stateContext } from "../../Context/StateContext";
import { Link } from "react-router-dom";

export default function ForgetPass() {
  const { resetUserPass } = useContext(firebaseContest);
  const { theme, Lemail, setLEmail } = useContext(stateContext);
  // forget password
  // function handelChangePass() {
  //   resetUserPass(Lemail)
  //     .then(() => {})
  //     .catch(() => {});
  // }
  return (
    <>
      <section className="lg:w-4/5 w-11/12 mx-auto">
        <div
          className={`${
            theme && "border-2"
          } relative py-3 mt-7 rounded-md sm:max-w-xl sm:mx-auto w-full `}
        >
          <div
            className={`${
              theme ? "bg-[#0f0f0f]" : "bg-white"
            } relative px-4 py-10 md:mx-0 shadow-md rounded-3xl sm:p-10`}
          >
            <div className="max-w-md mx-auto text-white">
              <div className="flex items-center space-x-5 justify-center">
                <h1
                  className={`${
                    theme ? "text-white" : "text-black"
                  } text-3xl font-bold`}
                >
                  {" "}
                  Forgrt Password
                </h1>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="login"
                  className={`font-semibold text-sm ${
                    theme ? "text-gray-400" : "text-black"
                  }  pb-1 block`}
                >
                  E-mail
                </label>
                <input
                  defaultValue={Lemail}
                  value={Lemail}
                  onChange={(e) => setLEmail(e.target.value)}
                  id="login"
                  type="email"
                  className={`border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none ${
                    theme
                      ? "bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                      : "bg-white text-black focus:border-white focus:ring-4 focus:ring-blue-500"
                  } `}
                />
              </div>

              <div className="mt-5">
                <button
                  // onClick={handelChangePass}
                  type="submit"
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Change Password
                </button>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="max-w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <Link
                  to={"/login"}
                  className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                  Try again with - Log In
                </Link>
                <span className="max-w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
