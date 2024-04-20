import {React,useRef,useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./support.css";
import img1 from "../../../assets/bot studio.png";
import img2 from "../../../assets/bot studio.png";
import img3 from "../../../assets/Agent assist.png";
import img4 from "../../../assets/bot studio.png";
export default function Convo_Support() {
  const location = useLocation();
  const Conversational_Marketing = useRef(null);
  const Conversational_Commerce = useRef(null);
  const Conversational_Support = useRef(null);
  

  useEffect(() => {
    const hash = location.hash;
    let ref;
    switch (hash) {
      case "#Conversational_Marketing":
        ref = Conversational_Marketing;
        break;
      case "#Conversational_Commerce":
        ref = Conversational_Commerce;
        break;
        case "#Conversational_Support":
        ref = Conversational_Support;
        break;
        
      default:
        break;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
   
    <>
      <div className="bgConmarket" ref={Conversational_Support}>
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 col-12 mt-5 p-2">
              <h1 class="co-cont">
                Transforming customer service, Conversational Support integrates
                real-time conversations and automated assistance. It focuses on
                providing instant
              </h1>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-sm-12 col-12 mt-5 ps-5 order-1 order-lg-1">
              <h3 className="market-title">Issue Resolution Bot</h3>
              <h4 className="market-subtitle">Using Bots for Common Issues</h4>
              <p className="market-para">
                Issue resolution bots tackle common problems <br />
                using predefined responses. Their goal is to <br /> provide
                immediate solutions, reducing the <br /> need for human
                intervention
              </p>

              <h4 className="market-subtitle">Reducing Response Times</h4>
              <p className="market-para">
                Automated support decreases response times, <br />
                ensuring prompt assistance for customers and
                <br /> contributing to a positive brand perception
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-2 order-lg-2">
              <img src={img1} className="comarket-img img-fluid"  alt="img"/>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-2 order-lg-1">
              <img src={img2} className="comarket-img " alt="img" />
            </div>

            <div className="col-lg-6 col-md-5 col-sm-12 col-12 mt-5 ps-5 order-1 order-lg-1">
              <h3 className="market-title">Live Chat Support</h3>
              <p className="market-subtitle">Real-Time Assistance</p>
              <p className="market-para">
                Live chat support offers instant access to <br />
                human agents when automated solutions <br />
                fall short, addressing complex queries <br />
                in real-time
              </p>

              <h4 className="market-subtitle">
                Enhancing Customer Satisfaction
              </h4>
              <p className="market-para">
                Immediate support contributes to overall customer <br />
                satisfaction, fostering positive experiences and <br />
                loyalty
              </p>
            </div>
            {/* <div className="col-lg-1 col-md-1 col-0"></div> */}
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-0"></div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 mt-4 order-1 order-lg-1">
              <h3 className="market-title">Multilingual Support</h3>
              <h4 className="market-subtitle">
                Offering Multilingual Assistance
              </h4>
              <p className="market-para">
                Multilingual support ensures language is not a <br />
                barrier. Conversational platforms can respond
                <br /> in multiple languages, expanding accessibility
              </p>

              <h4 className="market-subtitle">Global Reach</h4>
              <p className="market-para">
                By offering support in various languages, <br />
                businesses can expand their global reach
                <br /> and provide a seamless experience for
                <br /> diverse customers
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-2 order-lg-1">
              <img src={img3} alt="img" className="comarket-img img-fluid" />
            </div>
          </div>
        </div>
        <div className="container mt-5 p-4">
          <div className="row">
            <div className="col-lg-5 col-md-6  col-sm-12 col-12 order-2 order-lg-1">
              <img src={img4} alt="img" className="comarket-img " />
            </div>
            <div className="col-lg-7 col-md-5 col-sm-12 col-12 mt-5 ps-5 order-1 order-lg-1">
              <h3 className="market-title">Knowledge Base Integration</h3>
              <p className="market-subtitle">
                Integrating Chatbots with Knowledge Bases
              </p>
              <p className="market-para">
                Knowledge base integration empowers chatbots with <br />{" "}
                detailed information, ensuring accurate and <br /> comprehensive
                support
              </p>

              <h4 className="market-subtitle">Empowering Self-Service</h4>
              <p className="market-para">
              Self-service options allow customers to access guides
              independently, reducing support ticket volumes and <br/>enhancing the
              customer experience
              </p>
            </div>
            {/* <div className="col-lg-1 col-md-1 col-0"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
