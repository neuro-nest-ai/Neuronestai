import React, { useEffect } from "react";
// import { withRouter } from "react-router-dom";
import "./solution.css";
import { FaGreaterThan } from "react-icons/fa6";
import img1 from "../../assets/abondant cart.png";
import img2 from "../../assets/Agent assist.png";
import img3 from "../../assets/bot studio.png";
import img4 from "../../assets/conversation bot.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Solution() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sol-back">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-2 p-5">
            <h1 class="sol-cont">
              Empower Your Digital Journey <br />
              Redefine Experiences with Advanced
            </h1>
          </div>

        </div>
      </div>
      <div className="container mt-3">
        

        <div className="row">
          <div className="col-lg-"></div>
          <div className="col-lg-6 p-4 py-5 mt-4 order-1 order-lg-1">
            <h3 className="solution-head">Conversational Marketing</h3>
            <p className="solution-para">
              Transform your marketing strategy
            
              with chatbots for lead generation
            <br/> and personalized interactions
             <Link to="/Conversational_Marketing" className="Read-more">
                Read More <FaGreaterThan />
              </Link> 
            </p>
          </div>
          <div className="col-lg-6 order-2 order-lg-1">
            <img src={img1} className="market-img " />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <img src={img2} className="market-img img-fluid" />
          </div>
          <div className="col-lg-6 p-4 py-5 mt-5 order-1 order-lg-1">
            <h3 className="solution-head ">Conversational Commerce</h3>
            <p className="solution-para">
              Simplify transactions and elevate the shopping experience through
              conversational interfaces.
              <Link to="/Conversational_Commerce" className="Read-more">
                Read More <FaGreaterThan />
             </Link>
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 p-4 py-5 mt-5 order-1 order-lg-1">
            <h3 className="solution-head">Conversational Support</h3>
            <p className="solution-para">
               Enhance user experience, streamline communication, and provide efficient assistance around the clock
             <Link to="/Conversational_Marketing" className="Read-more">
                Read More <FaGreaterThan />
              </Link> 
            </p>
          </div>
          <div className="col-lg-6 order-2 order-lg-1">
            <img src={img3} className="market-img  img-fluid" />
          </div>
        </div>
       

        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <img src={img4} className="market-img  img-fluid" />
          </div>
          <div className="col-lg-6 p-4 py-5 mt-5 order-1 order-lg-1">
            <h3 className="solution-head ">KRI/KPI Related Solutions</h3>
            <p className="solution-para">
              Optimize your business performance with solutions centered around
              Key Risk Indicators (KRI) and Key Performance Indicators (KPI).
              <Link to="/Conversational_Commerce" className="Read-more">
              Read More <FaGreaterThan />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}
