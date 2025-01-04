import React, { useContext } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpg";
import { Fade, Zoom } from "react-awesome-reveal";
import { stateContext } from "../../Context/StateContext";
export default function VisaProcess() {
  const { theme } = useContext(stateContext);
  return (
    <>
      <section className={`${theme ? "text-white" : " text-black"} mt-6`}>
        <Zoom>
          <div>
            <h1 className=" text-center text-3xl font-bold">
              Our Visa Processing Services
            </h1>
            <p className="text-sm font-semibold text-center max-w-[600px] mx-auto">
              We offer reliable and efficient visa processing services to
              simplify your travel and immigration needs. Our expert team
              ensures a smooth and hassle-free application process for
              individuals and businesses.
            </p>
          </div>
        </Zoom>
        <div className="mt-10 grid items-center gap-4 lg:grid-cols-2 w-11/12 mx-auto lg:w-4/5">
          <Zoom>
            <div>
              <h1 className=" mb-3 text-xl font-bold">Travel Visa </h1>
              <ul className=" list-disc ml-4 ">
                <li>
                  <span className="text-lg font-bold">
                    Mandatory Visa Requirement:
                  </span>
                  Traveling to another country requires a valid visa, and our
                  visa processing agency in Bangladesh ensures a seamless
                  application process for you.
                </li>
                <li>
                  <span className="text-lg font-bold">
                    Trusted by Many Travelers::
                  </span>
                  We have successfully assisted countless Bangladeshis in
                  obtaining visas for international tourism, making their travel
                  dreams a reality.
                </li>
                <li>
                  {" "}
                  <span className="text-lg font-bold">
                    Popular Destinations:
                  </span>
                  We specialize in visa processing for top destinations like
                  Turkey, Malaysia, Singapore, and more, catering to the travel
                  preferences of Bangladeshi tourists.
                </li>
              </ul>
            </div>
          </Zoom>

          <Fade>
            <div className="">
              <img className="w-full rounded-md" src={img1} alt="" />
            </div>
          </Fade>
          <Fade>
            <div>
              <img className="w-full rounded-md" src={img2} alt="" />
            </div>
          </Fade>
          <Zoom>
            <div>
              <h1 className="mb-3 text-xl font-bold">Study Visa</h1>
              <ul className=" list-disc ml-4 ">
                <li>
                  <span className="text-lg font-bold">Education Abroad:</span>
                  In Bangladesh, studying abroad is a popular aspiration, with a
                  growing number of students traveling overseas for higher
                  education.
                </li>
                <li>
                  <span className="text-lg font-bold">Trusted Support:</span>
                  Our visa processing agency has successfully assisted numerous
                  students in securing visas for their educational journeys.
                </li>
                <li>
                  {" "}
                  <span className="text-lg font-bold">
                    Meeting Growing Demand:
                  </span>
                  As the number of applicants rises, we are committed to helping
                  students achieve their dreams of studying in their desired
                  countries.{" "}
                </li>
              </ul>
            </div>
          </Zoom>

          <Zoom>
            <div>
              <Zoom>
                <h1 className="mb-3 text-xl font-bold">Official Visa</h1>
              </Zoom>
              <Zoom>
                <ul className=" list-disc ml-4 ">
                  <li>
                    <span className="text-lg font-bold">
                      Business and Commercial Visas:
                    </span>
                    These visas are crucial for professionals traveling abroad
                    for business meetings, trade, and commercial activities.
                  </li>
                  <li>
                    <span className="text-lg font-bold">
                      Reliable Services:
                    </span>
                    Our visa processing agency in Bangladesh has assisted
                    countless entrepreneurs and business professionals in
                    obtaining their business and commercial visas with ease.
                  </li>
                  <li>
                    {" "}
                    <span className="text-lg font-bold">
                      Supporting Global Ventures:
                    </span>
                    As the demand for international business travel grows, we
                    ensure a seamless visa process to help you achieve your
                    commercial goals.
                  </li>
                </ul>
              </Zoom>
            </div>
          </Zoom>

          <Fade>
            <div>
              <img className="rounded-md" src={img3} alt="" />
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
