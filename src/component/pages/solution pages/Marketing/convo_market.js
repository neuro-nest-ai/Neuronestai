import {React,useRef,useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./convo_market.css";
import img1 from "../../../assets/Agent assist.png";
import img2 from "../../../assets/bot studio.png";
import img3 from "../../../assets/Agent assist.png";
import img4 from "../../../assets/bot studio.png";
export default function Resposive() {
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
    <div className="bgConmarket" ref={Conversational_Marketing}>
      <div className="container ">
        <div className="row">
        
          <div className="col-lg-12 col-12 mt-2 p-5">
            <h1 class="co-cont ">
              Conversational Marketing transforms customer engagement with
              real-time interactions.It focuses on personalized experiences,
              replacing static content with dynamic conversations.
            </h1>
          </div>

        </div>
      </div>
      <div className="container  " >
        <div className="row">
          <div className="col-lg-6 col-md-5 col-sm-12 col-12 mt-5 ps-5 order-1 order-lg-1">
            <h3 className="market-title">Real-Time Engagement</h3>
            <h4 className="market-subtitle">Instant Messaging</h4>
            <p className="market-para">
              Conversational Marketing relies on instant messaging <br />
              for proactive customer engagement, providing <br />
              immediate assistance and guiding users through
              <br /> decisions
            </p>

            <h4 className="market-subtitle">Personalization</h4>
            <p className="market-para">
              Personalization is key, with real-time analysis allowing
              <br /> for tailored messages that resonate with individual
              preferences
            </p>
          </div>
           <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-2 order-lg-2 ">
            <img src={img1} className="comarket-img img-fluid" alt="img" />
          </div>
          
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
        
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 order-2 order-lg-1">
            <img src={img2} className="comarket-img col-lg-12" alt="img" />
          </div>
          

          <div className="col-lg-7 col-md-5 col-sm-12 col-12 mt-5 ps-5 order-1 order-lg-1">
            <h3 className="market-title">Chatbot for Lead Generation</h3>
            <p className="market-subtitle">Automated Lead Qualification</p>
            <p className="market-para">
              Chatbots play a pivotal role in lead generation, initiating
              conversations and qualifying leads based on predefined
              <br /> criteria.
            </p>

            <h4 className="market-subtitle">Conversion Optimization</h4>
            <p className="market-para">
              Beyond lead generation, conversational marketing actively
              contributes to conversion optimization by facilitating
              <br /> the purchase process.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
        <div className="col-lg-1 col-md-1 col-0"></div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 mt-5 order-1 order-lg-1">
            <h3 className="market-title">Targeted Campaigns</h3>
            <h4 className="market-subtitle">Messaging Campaigns</h4>
            <p className="market-para">
              Conversational marketing allows for targeted messaging campaigns,
              tailoring messages to specific audience segments
            </p>

            <h4 className="market-subtitle">Audience Segmentation</h4>
            <p className="market-para">
            Effective segmentation based on demographics and behavior ensures contextually relevant messages for each audience segment
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-2 order-lg-1">
            <img src={img3} className="comarket-img img-fluid"  alt="img"/>
          </div>
        </div>
      </div>
      <div className="container mt-5 p-4">
        <div className="row">
          <div className="col-lg-5 col-md-6  col-sm-12 col-12 order-2 order-lg-1">
          <img src={img4} className="comarket-img col-lg-12"  alt="img"/>
          </div>
          <div className="col-lg-7 col-md-5 col-sm-12 col-12 mt-5 ps-5 order-1 order-lg-1">
            <h3 className="market-title">Interactive Content</h3>
            <p className="market-subtitle">Engaging Experiences</p>
            <p className="market-para">
            Conversational Marketing incorporates interactive <br/>
            content, such as quizzes and polls, creating<br/> engaging experiences
            </p>

            <h4 className="market-subtitle">Insightful Feedback</h4>
            <p className="market-para">
            Interactive elements not only capture attention <br/>but also provide valuable insights for market <br/>research and strategy refinement
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}
