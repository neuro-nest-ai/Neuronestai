import React from "react";
import "./home_support.css";
import common1 from "../../../assets/introall.jpg";
export default function Home_Support() {
  return (
    <div className="common-home">
      <div className="container home_inud">
        <div className="row  ">
          <div className="col-lg-1 "></div>
          <div className="col-lg-5 ai ">
            <h2 className="com-head mt-2">
              Welcome to the future of support where conversations are the
              solution!
            </h2>
            <p className="com-para homecom2">
              Elevate your business efficiency and customer interactions using
              our advanced AI generative chat bots. Streamline operations, boost
              productivity, and engage customers intelligently the future of
              business solutions is here!
            </p>
          </div>
          <div className="col-lg-6 mt-5 ps-5 mb-5 pe-4">
            <img src={common1} className="img-com homeimg2"  alt="img"/>
          </div>
        </div>
      </div>
    </div>
  );
}
