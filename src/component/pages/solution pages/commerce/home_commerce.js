import React from "react";
import "./home_commerce.css";
import common1 from "../../../assets/introall.jpg";
export default function Home_Commerce() {
  return (
    <div className="common-home ">
      <div className="container  home_inud">
        <div className="row ">
          
          <div className="col-lg-6 homecom">
            <h2 className="com-head">
              Get ready for a shopping experience like never before!
            </h2>
            <p className="com-para mt-3">
              Introducing our AI-powered chatbots, your personal shopping
              assistants available 24/7.Embrace the future of commerce – <br/> where
              every conversation leads to a <br/>delightful purchase!
            </p>
          </div>
          <div className="col-lg-6   ps-5 mb-5 pe-4">
            <img src={common1} className=" homeimg" alt="img" />
          </div>
         
        </div>
      </div>
    </div>
  );
}
