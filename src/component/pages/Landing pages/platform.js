import React from "react";
import "./solution.css";
import img1 from "../../assets/conversation bot.png";
import img2 from "../../assets/Reports _ Analytics.png";
import img3 from "../../assets/Agent assist.png";
import img4 from "../../assets/bot studio.png";
export default function Platform() {
  return (
    <div className="sol-back">
      <div className="container">
        <div className="row">
          <div className="col-lg-"></div>
          <div className="col-lg-12 mt-3 p-5">
            <h1 class="sol-cont">
              Elevate Your Digital Odyssey Transform Realities through
              Cutting-Edge Encounters
            </h1>
          </div>

          <div className="col-lg-"></div>
        </div>
      </div>
      <div className="container">
      <div className="row">
          <div className="col-lg-"></div>
          <div className="col-lg-6 p-4 py-5 mt-4 order-1 order-lg-1">
            <h3 className="solution-head">Conversational Bot</h3>
            <p className="solution-para">
            Engage your audience with intelligent chatbots that seamlessly
              interact across multiple channels, including WhatsApp, Instagram,
              SMS, Telegram, websites, and chatbot applications.
             
            </p>
          </div>
          <div className="col-lg-6 order-2 order-lg-2">
            <img src={img1} className="market-img " alt="img"/>
          </div>
        </div>
      </div>
  
      <div className="container mt-5 p-4">
        <div className="row">
         
          <div className="col-lg-6 order-2 order-lg-1">
            <img src={img2} className="market-img img-fluid" alt="img" />
          </div>
          <div className="col-lg-6 p-3 py-5 mt-5 order-1 order-lg-1 ">
            <h3 className="solution-head ">Reports & Analytics</h3>

            <p className="solution-para">
              Gain valuable insights into user interactions and performance
              metrics.Our robust analytics tools empower data-driven
              decision-making.
               
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 p-4">
        <div className="row">
         
          <div className="col-lg-6 p-4 py-5 mt-5 order-1 order-lg-1">
            <h3 className="solution-head">Agent Assist</h3>

            <p className="solution-para">
              Boost your team's efficiency with Agent Assist features,
              optimizing human-bot collaboration for enhanced customer support
              and operations.
               
            </p>
          </div>

          <div className="col-lg-6 order-2 order-lg-1">
            <img src={img3} className="market-img img-fluid" alt="img" />
          </div>
        
        </div>
      </div>
      <div className="container mt-5  p-4">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <img src={img4} className="market-img img-fluid"  alt="img"/>
          </div>
          <div className="col-lg-6 p-4 py-5 mt-5 order-1 order-lg-1">
            <h3 className="solution-head ">Bot Studio</h3>

            <p className="solution-para">
              Unleash creativity with our Bot Studio, where you can design and
              customize chatbots to suit our unique business requirements.
               
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
