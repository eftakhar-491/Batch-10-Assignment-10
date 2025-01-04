import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className=" font-bold text-indigo-600 text-5xl">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div
            onClick={() => navigate("/")}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center">
                <div className="relative group flex-shrink-0">
                  <button className=" relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                    <span
                      className={` bg-black relative z-10 block px-6 py-2 rounded-xl `}
                    >
                      <div className=" relative z-10 flex items-center space-x-2">
                        <span className="w-full transition-all duration-500 group-hover:translate-x-1">
                          Go to Home Page
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
