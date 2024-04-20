import {React,useRef,useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./commerce.css";
import img1 from "../../../assets/bot studio.png";
import img2 from "../../../assets/abocart1.png";
import img3 from "../../../assets/Agent assist.png";
import img4 from "../../../assets/bot studio.png";
export default function Convo_Commerce() {
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
      <div className="bgConmarket">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 col-12 mt-5 p-2">
              <h1 class="co-cont">
                Conversational Commerce revolutionizes the way businesses
                interact with customers, blending
                <br /> e-commerce with real-time conversations.
              </h1>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            {/* <div className="col-lg-1 col-md-1 col-0"></div> */}
            <div className="col-lg-7 col-md-5 col-sm-12 col-12 mt-5 ps-5 order-1 order-lg-1">
              <h3 className="market-title">Creating Marketing Campaigns</h3>
              <h4 className="market-subtitle">Personalized Campaigns</h4>
              <p className="market-para">
                Conversational Commerce enables the creation of
                <br /> personalized marketing campaigns, tailoring
                <br /> messages to individual customer preferences
              </p>

              <h4 className="market-subtitle">Interactive Advertising</h4>
              <p className="market-para">
                Interactive elements in campaigns, such as chatbots,
                <br /> quizzes,and polls, engage customers and provide
                <br /> valuable feedback
              </p>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-12 order-2 order-lg-2">
              <img src={img1} className="comarket-img " />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-2 order-lg-1">
              <img src={img2} className="comarket-img " />
            </div>

            <div className="col-lg-6 col-md-5 col-sm-12 col-12 mt-5 ps-5 order-1 order-lg-1">
              <h3 className="market-title">Conversational Selling</h3>
              <p className="market-subtitle">Assisted Shopping</p>
              <p className="market-para">
                Conversational Commerce facilitates assisted
                <br /> shopping, where chatbots guide customers <br />
                through product selection and purchasing
                <br />
                decisions
              </p>

              <h4 className="market-subtitle">Order Placement</h4>
              <p className="market-para">
                Customers can place orders directly through
                <br /> chat, streamlining the // buying process for
                <br /> increased convenience
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-0"></div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 mt-4 order-1 order-lg-1" >
              <h3 className="market-title">Seamless Payments</h3>
              <h4 className="market-subtitle">Integrated Payment Solutions</h4>
              <p className="market-para">
                The module seamlessly integrates payment gateways, allowing
                customers to complete transactions within
                the conversation
              </p>

              <h4 className="market-subtitle">Secure Transactions</h4>
              <p className="market-para">
                Security measures ensure safe and secure online transactions,
                building trust in the buying process
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-2 order-lg-1">
              <img src={img3} className="comarket-img img-fluid" />
            </div>
          </div>
        </div>
        <div className="container mt-5 p-4">
          <div className="row">
            <div className="col-lg-5 col-md-6  col-sm-12 col-12 order-2 order-lg-1">
              <img src={img4} className="comarket-img " />
            </div>
            <div className="col-lg-7 col-md-5 col-sm-12 col-12 mt-5 ps-5 order-1 order-lg-2">
              <h3 className="market-title">Integration with Marketing Tools</h3>
              <p className="market-subtitle">
                Connecting with Marketing Platforms
              </p>
              <p className="market-para">
                Conversational Commerce integrates with marketing tools
                <br />
                for comprehensive customer engagement, including
                <br /> targeted promotions and loyalty programs
              </p>

              <h4 className="market-subtitle">Analytics and Reporting</h4>
              <p className="market-para">
                The platform provides analytics for tracking campaign
                performance and customer interactions, facilitating <br />{" "}
                data-driven marketing strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
