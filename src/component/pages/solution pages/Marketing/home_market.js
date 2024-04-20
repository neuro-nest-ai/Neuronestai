import React from "react";
import "./home_market.css";
import common1 from "../../../assets/introall.jpg";
export default function Home_market() {
  return (
    <div className="common-home">
      <div className="container  home_inud">
        <div className="row ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-md-6 col-12 mt-5">
            <h2 className="com-head homecom1">
              Hey there! Ready to elevate your business? Say hello to AI-powered
              chatbots!
            </h2>
            <p className="com-para mt-1">
              Imagine having personalized, 24/7 customer support and seamless
              interactions. Our chatbots aren't just assistants; they're the
              superheroes of efficiency! Streamline your operations, engage
              customers intelligently, and witness the magic of conversational
              marketing.
            </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
          </div>
          <div className="col-lg-1"></div>

          <div className="col-lg-5 col-md-6 col-12 mt-5 ps-5 mb-5 pe-4">
            <img src={common1} className=" homeimg1 img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
}
