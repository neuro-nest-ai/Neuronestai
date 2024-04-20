import React, { useState, useEffect ,useRef} from "react";
import Accordion from "react-bootstrap/Accordion";
import {useLocation} from "react-router-dom";
import "./indus.css";

import ecom from "../../assets/e-com order tracking.png";
import ecom1 from "../../assets/e-com order & payments.png";
import ecom2 from "../../assets/e-com Product recomentation.png";
import ecom3 from "../../assets/e-com Customer Support.png";
import ecom4 from "../../assets/E-com inventory management.png";

import edu1 from "../../assets/edu - Parents.png";
import edu2 from "../../assets/edu - teachers.png";
import edu3 from "../../assets/Edu- remenders.png";
import edu4 from "../../assets/edu Principal.png";
import edu5 from "../../assets/edu - Home work assist.png";

import food1 from "../../assets/edu - Parents.png";
import food2 from "../../assets/E-com inventory management.png";
import food3 from "../../assets/edu - Parents.png";
import food4 from "../../assets/E-com inventory management.png";
import food5 from "../../assets/edu - Parents.png";

import travel1 from "../../assets/Travel.png";
import travel2 from "../../assets/travel - assist.png";
import travel3 from "../../assets/travel - assist.png";
import travel4 from "../../assets/travel - Personalized Trip Planning.png";
import travel5 from "../../assets/travel - Predictive Fleet.png";

import entertain1 from "../../assets/edu - Parents.png";
import entertain2 from "../../assets/E-com inventory management.png";
import entertain3 from "../../assets/edu - Parents.png";
import entertain4 from "../../assets/E-com inventory management.png";
import entertain5 from "../../assets/edu - Parents.png";

import realEs1 from "../../assets/edu - Parents.png";
import realEs2 from "../../assets/E-com inventory management.png";
import realEs3 from "../../assets/edu - Parents.png";
import realEs4 from "../../assets/E-com inventory management.png";
import realEs5 from "../../assets/edu - Parents.png";

import logics1 from "../../assets/edu - Parents.png";
import logics2 from "../../assets/E-com inventory management.png";
import logics3 from "../../assets/edu - Parents.png";
import logics4 from "../../assets/E-com inventory management.png";
import logics5 from "../../assets/edu - Parents.png";

import health1 from "../../assets/edu - Parents.png";
import health2 from "../../assets/E-com inventory management.png";
import health3 from "../../assets/edu - Parents.png";
import health4 from "../../assets/E-com inventory management.png";
import health5 from "../../assets/edu - Parents.png";

export default function IndusEcommerce() {
  const location = useLocation();
  const ecommerce = useRef(null);
  const Education = useRef(null);
  const Food = useRef(null);
  const Entertainment = useRef(null);
  const RealEstate = useRef(null);
  const Logistics = useRef(null);
  const Healthcare = useRef(null);
  const Travel = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    let ref;
    switch (hash) {
      case "#ecommerce":
        ref = ecommerce;
        break;
      case "#Education":
        ref = Education;
        break;
        case "#Food":
        ref = Food;
        break;
        case "#RealEstate":
        ref = RealEstate;
        break;
        case "#Entertainment":
        ref = Entertainment;
        break;
        case "#Logistics":
        ref = Logistics;
        break;
        case "#Healthcare":
        ref = Healthcare;
        break;
        case "#Travel":
        ref = Travel;
        break;

      default:
        break;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
 
  const [activeKey, setActiveKey] = useState({
    ecom: 0,
    education: 0,
    food: 0,
    travel:0,
    entertainment: 0,
    realEstate:0,
    logicstics:0,
    healthcare:0    

  });

  const handleAccordionClick = (eventKey, section) => {
    setActiveKey({
      ...activeKey,
      [section]: eventKey,
    });
  };

  const imageMapping = {
    ecom: {
      0: ecom,
      1: ecom1,
      2: ecom2,
      3: ecom3,
      4: ecom4,
      // Add other ecom images here
    },
    food: {
      0: food1,
      1: food2,
      2: food3,
      3: food4,
      4: food5,
    },
    education: {
      0: edu1,
      1: edu2,
      2: edu3,
      3: edu4,
      4: edu5,
    },
    travel: {
      0: travel1,
      1: travel2,
      2: travel3,
      3: travel4,
      4: travel5,
    },
    entertainment: {
      0: entertain1,
      1: entertain2,
      2:entertain3,
      3:entertain4,
      4:entertain5,
    },
    realEstate:{
      0:realEs1,
      1:realEs2,
      2:realEs3,
      3:realEs4,
      4:realEs5
    },
    logicstics:{
      0:logics1,
      1:logics2,
      2:logics3,
      3:logics4,
      4:logics5
    },
    healthcare:{
      0:health1,
      1:health2,
      2:health3,
      3:health4,
      4:health5
    },
  };
  const renderImages = (section) => {
    const activeKey1 = activeKey[section];
    if (
      activeKey1 !== null &&
      imageMapping[section][activeKey1] !== undefined
    ) {
      return (
        <img
          src={imageMapping[section][activeKey1]}
          className="ecom-img img-fluid"
          alt={section === "ecom" ? "Ecommerce" : "Education"}
        />
      );
    }
    return null;
  };

  useEffect(() => {
    renderDefaultImage();
  }, [activeKey.ecom, activeKey.education, activeKey.food,activeKey.travel,activeKey.entertainment,activeKey.realEs,activeKey.logitics,activeKey.healthcare]);

  const renderDefaultImage = () => {
    
    const sections = ["ecom", "education", "food","travel","entertainment","realEs","logitics","healthcare"];
    sections.forEach((section) => {
      const sectionImages = document.getElementById(section);
      if (sectionImages) {
        if (section === Object.keys(activeKey)[0]) {
          sectionImages.classList.remove("hidden");
        } else {
          sectionImages.classList.add("hidden");
        }
      }
    });
  };

  return (
    <div className="indutry-toporder bgindus p-5">
      <div className="container indus-top "ref={ecommerce}>
        <div className="row">
          <h2 className="main-inus-head">E-commerce</h2>
          <div className="col-lg-6 order-1 order-lg-1">
            <Accordion className="accord-ecom" activeKey={activeKey.ecom}>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  onClick={() => handleAccordionClick("0", "ecom")}
                  className={activeKey.ecom === "0" ? "active" : ""}
                >
                  <h5 className="ecom-head"> Order Tracking and Updates</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Customers inquire about order status, delivery times, and
                  receive real-time updates.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header
                  onClick={() => handleAccordionClick("1", "ecom")}
                  className={activeKey.ecom === "1" ? "active" : ""}
                >
                  <h5 className="ecom-head">Product Recommendations</h5>
                </Accordion.Header>
                <Accordion.Body>
                  AI-driven recommendations based on customer preferences and
                  purchase history.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-ecom" activeKey={activeKey.ecom}>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("2", "ecom")}
                    className={activeKey.ecom === "2" ? "active" : ""}
                  >
                    <h5 className="ecom-head"> Customer Support Chatbot</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    24/7 chatbot addressing queries, providing assistance, and
                    enhancing customer support.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("3", "ecom")}
                    className={activeKey.ecom === "3" ? "active" : ""}
                  >
                    <h5 className="ecom-head"> Inventory Management</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    AI tools for efficient inventory management, reducing
                    stockouts and overstock situations.
                  </Accordion.Body>
                </Accordion.Item>
               
                <Accordion.Item eventKey="4">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("4", "ecom")}
                    className={activeKey.ecom === "4" ? "active" : ""}
                  >
                    <h5 className="ecom-head">
                      Personalized Shopping Experience
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Tailoring the online shopping experience with personalized
                    discounts, promotions, and content.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-2  order-lg-2 ">
            <img src={ecom} className="comarket-img   img-fluid " />
          </div>
        </div>
      </div>
      <div className="container indus-top " ref={Education}>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">{renderImages("education")}</div>
          <div className="col-lg-6 order-1 order-lg-1">
            <h2 className="main-inus-head">Education</h2>
            <Accordion className="accord-ecom" activeKey={activeKey.education}>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  onClick={() => handleAccordionClick("0", "education")}
                  className={activeKey.education === "0" ? "active" : ""}
                >
                  <h5 className="ecom-head">Parent-Student Interaction</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Real-time updates on students' academic progress, attendance,
                  and important announcements.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header
                  onClick={() => handleAccordionClick("1", "education")}
                  className={activeKey.education === "1" ? "active" : ""}
                >
                  <h5 className="ecom-head">
                    Teacher Engagement and Management
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  Streamlined class schedules, attendance tracking, and instant
                  communication for teachers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-ecom" activeKey={activeKey.education}>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("2", "education")}
                    className={activeKey.education === "2" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Automated Attendance System</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Efficient system updating databases in real-time based on
                    teacher inputs.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("3", "education")}
                    className={activeKey.education === "3" ? "active" : ""}
                  >
                    <h5 className="ecom-head">
                      {" "}
                      Principal Insights and Analytics
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Principals get analytics on teacher attendance, class
                    schedules, and key performance indicators.
                  </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="3">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("3", "education")}
                    className={activeKey.education === "3" ? "active" : ""}
                  >
                    <h5 className="ecom-head">
                      {" "}
                      Principal Insights and Analytics
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Principals get analytics on teacher attendance, class
                    schedules, and key performance indicators.
                  </Accordion.Body>
                </Accordion.Item> */}
                <Accordion.Item eventKey="4">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("4","education")}
                    className={activeKey === "4" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Homework Assistance Chatbot</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    AI-powered chatbot helping students with homework, study
                    materials, and subject-related queries.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="container indus-top"ref={Food}>
        <div className="row">
          <h2 className="main-inus-head">Food</h2>
          <div className="col-lg-6 order-1 order-lg-1">
            <Accordion className="accord-ecom" activeKey={activeKey.food}>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  onClick={() => handleAccordionClick("0", "food")}
                  className={activeKey.food === "0" ? "active" : ""}
                >
                  <h5 className="ecom-head"> Order Management Excellence</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Streamlined order processing, tracking, and delivery
                  management for restaurants.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header
                  onClick={() => handleAccordionClick("1", "food")}
                  className={activeKey.ecom === "1" ? "active" : ""}
                >
                  <h5 className="ecom-head">Personalized Menu Curation</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Elevate dining experiences with AI-curated menus tailored to
                  individual preferences.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-ecom" activeKey={activeKey.food}>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("2", "food")}
                    className={activeKey.food === "2" ? "active" : ""}
                  >
                    <h5 className="ecom-head"> Smart Inventory Control</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Optimize inventory with AI to minimize wastage and ensure
                    freshness of ingredients.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("3", "food")}
                    className={activeKey.food === "3" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Loyalty Redefined</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    AI-driven loyalty programs offering personalized discounts
                    and promotions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("4", "food")}
                    className={activeKey.food === "4" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Effortless Kitchen Operations</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Automate repetitive tasks in the kitchen, enhancing overall
                    efficiency.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>
          </div>
          <div className="col-lg-6 order-2 order-lg-1">{renderImages("food")}</div>
        </div>
      </div>
      <div className="container indus-top" ref={Travel}>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">{renderImages("travel")}</div>
          <div className="col-lg-6 order-1 order-lg-1">
            <h2 className="main-inus-head">Travel</h2>
            <Accordion className="accord-ecom" activeKey={activeKey.travel}>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  onClick={() => handleAccordionClick("0", "travel")}
                  className={activeKey.travel === "0" ? "active" : ""}
                >
                  <h5 className="ecom-head">Dynamic Pricing Precision</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Implement AI algorithms to optimize pricing based on demand,
                  seasonality, and trends.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header
                  onClick={() => handleAccordionClick("1", "travel")}
                  className={activeKey.travel === "1" ? "active" : ""}
                >
                  <h5 className="ecom-head">Tailored Travel Recommendations</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Enhance customer experiences with AI-driven suggestions for
                  destinations and activities.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-ecom" activeKey={activeKey.travel}>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("2", "travel")}
                    className={activeKey.travel === "2" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Chatbot Travel Companion</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Automate customer support for inquiries, booking
                    confirmations, and travel assistance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("3", "travel")}
                    className={activeKey.travel === "3" ? "active" : ""}
                  >
                    <h5 className="ecom-head">
                      {" "}
                      Principal Insights and Analytics
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Leverage AI tools for creating customized itineraries and
                    travel plans.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("4","travel")}
                    className={activeKey.travel === "4" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Predictive Fleet Maintenance</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Employ AI analytics for predicting maintenance needs in
                    transportation fleets.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="container indus-top"ref={Entertainment}>
        <div className="row">
          <h2 className="main-inus-head">Entertainment</h2>
          <div className="col-lg-6">
            <Accordion className="accord-ecom" activeKey={activeKey.entertainment}>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  onClick={() => handleAccordionClick("0", "entertainment")}
                  className={activeKey.entertainment === "0" ? "active" : ""}
                >
                  <h5 className="ecom-head">Content Discovery Revolution</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Revolutionize content discovery with AI-driven suggestions
                  based on user preferences.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header
                  onClick={() => handleAccordionClick("1", "entertainment")}
                  className={activeKey.entertainment === "1" ? "active" : ""}
                >
                  <h5 className="ecom-head">Audience Insight Analytics</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Gain deep insights into audience behaviors and preferences
                  with AI analytics.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-ecom" activeKey={activeKey.entertainment}>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("2", "entertainment")}
                    className={activeKey.entertainment === "2" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Chatbot Ticket Concierge</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Enhance user experiences with AI chatbots facilitating
                    ticket bookings and event details.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("3", "entertainment")}
                    className={activeKey.entertainment === "3" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Virtual Event Innovations</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Integrate AI for enhanced virtual reality experiences in
                    remote or virtual events.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("4", "entertainment")}
                    className={activeKey.entertainment === "4" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Creative Content Generation</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Utilize AI tools for generating creative content, scripts,
                    and music compositions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>
          </div>
          <div className="col-lg-6">{renderImages("entertainment")}</div>
        </div>
      </div>
      <div className="container indus-top" ref={RealEstate}>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">{renderImages("realEstate")}</div>
          <div className="col-lg-6 order-1 order-lg-1">
            <h2 className="main-inus-head">Real Estate</h2>
            <Accordion className="accord-ecom" activeKey={activeKey.realEstate}>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  onClick={() => handleAccordionClick("0", "realEstate")}
                  className={activeKey.realEstate === "0" ? "active" : ""}
                >
                  <h5 className="ecom-head">Intelligent Property Search</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Transform property searches with AI-driven tools tailored to
                  user preferences.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header
                  onClick={() => handleAccordionClick("1", "realEstate")}
                  className={activeKey.realEstate === "1" ? "active" : ""}
                >
                  <h5 className="ecom-head">Predictive Property Valuation</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Employ AI algorithms to predict property values based on
                  market trends and analysis.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-ecom" activeKey={activeKey.realEstate}>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("2", "realEstate")}
                    className={activeKey.education === "2" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Chatbot Real Estate Guide</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Enhance user experiences with AI chatbots answering queries
                    about properties.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("3", "realEstate")}
                    className={activeKey.realEstate === "3" ? "active" : ""}
                  >
                    <h5 className="ecom-head">
                      Automated Document Verification
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Streamline processes with AI for efficient document
                    verification and authentication.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("4","realEstate")}
                    className={activeKey.realEstate === "4" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Smart Home Advancements</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Integrate AI solutions for smart home features, security,
                    and energy efficiency.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="container indus-top" ref={Logistics}>
        <div className="row">
          <h2 className="main-inus-head">Logistics</h2>
          <div className="col-lg-6 order-1 order-lg-1">
            <Accordion className="accord-ecom" activeKey={activeKey.logicstics}>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  onClick={() => handleAccordionClick("0", "logicstics")}
                  className={activeKey.logicstics === "0" ? "active" : ""}
                >
                  <h5 className="ecom-head">Optimized Route Navigation</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Boost efficiency with AI algorithms for optimizing delivery
                  routes and transit times.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header
                  onClick={() => handleAccordionClick("1", "logicstics")}
                  className={activeKey.logicstics === "1" ? "active" : ""}
                >
                  <h5 className="ecom-head">Warehouse Automation Brilliance</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Transform warehouse operations with AI-driven systems for
                  inventory and logistics.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-ecom" activeKey={activeKey.logicstics}>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("2", "logicstics")}
                    className={activeKey.logicstics === "2" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Predictive Fleet Maintenance</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Predict maintenance needs in logistics fleets with AI
                    analytics.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("3", "logicstics")}
                    className={activeKey.logicstics === "" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Real-time Shipment Visibility</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Enhance customer satisfaction with AI-powered real-time
                    shipment tracking.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("4", "logicstics")}
                    className={activeKey.logicstics === "4" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Precision Demand Forecasting</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Leverage AI tools for predicting demand, optimizing
                    inventory, and reducing delays.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>
          </div>
          <div className="col-lg-6 order-2 order-lg-1">{renderImages("logicstics")}</div>
        </div>
      </div>
      <div className="container indus-top p-5" ref={Healthcare}>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">{renderImages("healthcare")}</div>
          <div className="col-lg-6 order-1 order-lg-1">
            <h2 className="main-inus-head">Healthcare</h2>
            <Accordion className="accord-ecom" activeKey={activeKey.healthcare}>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  onClick={() => handleAccordionClick("0", "healthcare")}
                  className={activeKey.healthcare === "0" ? "active" : ""}
                >
                  <h5 className="ecom-head">Continuous Patient Monitoring</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Revolutionize patient care with AI tools for continuous health
                  monitoring.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header
                  onClick={() => handleAccordionClick("1", "healthcare")}
                  className={activeKey.healthcare === "1" ? "active" : ""}
                >
                  <h5 className="ecom-head">Diagnostic Precision</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Aid medical professionals with AI algorithms for accurate and
                  timely diagnoses.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-ecom" activeKey={activeKey.healthcare}>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("2", "healthcare")}
                    className={activeKey.healthcare === "2" ? "active" : ""}
                  >
                    <h5 className="ecom-head">
                      Efficient Appointment Management
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Streamline healthcare operations with AI-powered appointment
                    scheduling and reminders.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("3", "healthcare")}
                    className={activeKey.healthcare === "3" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Drug Interaction Prevention</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Enhance patient safety with AI tools predicting potential
                    drug interactions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header
                    onClick={() => handleAccordionClick("4","healthcare")}
                    className={activeKey.healthcare === "4" ? "active" : ""}
                  >
                    <h5 className="ecom-head">Telemedicine Excellence</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Provide accessible healthcare with AI-enhanced telemedicine
                    solutions for remote consultations.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
