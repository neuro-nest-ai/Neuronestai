import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import plat1 from "../../assets/whatsapp.jpg";
import plat2 from "../../assets/Instagram.jpg";
import plat3 from "../../assets/Telegram.jpg";
import plat4 from "../../assets/Facebook.jpg";
import plat5 from "../../assets/Sms.jpg";
import "./plat1.css";
export default function

  FormPlat() {

  const location = useLocation();
  const whatsappRef = useRef(null);
  const instagramRef = useRef(null);
  const telegramRef = useRef(null);
  const facebookRef = useRef(null);
  const smsRef = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    let ref;
    switch (hash) {
      case '#whatsappRef':
        ref = whatsappRef;
        break;
      case '#instagramRef':
        ref = instagramRef;
        break;
      case '#telegramRef':
        ref = telegramRef;
        break;
      case '#facebookRef':
        ref = facebookRef;
        break;
      case '#smsRef':
        ref = smsRef;
        break;

    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);


  return (
    <div className="plat-top bgindus p-5 ">
      <div className="container  indus-top  ">
        <div className="row" id="WhatsApp" ref={whatsappRef}>

          <div className="col-lg-6 col-md-6 col-sm-12 mt order-1  order-lg-1">
            <h2 className="main-inus-head mt-5">WhatsApp</h2>
            <Accordion className="accord-plat" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="plat-head">
                  <h5 className="plat-head">Instant Accessibility</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Connect with users instantly, leveraging WhatsApp's widespread
                  user base for immediate interaction.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h5 className="plat-head">Rich Media Sharing</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Share multimedia content effortlessly, including images,
                  videos, and documents, enhancing user engagement.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h5 className="plat-head">Personalized Alerts</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Send personalized alerts, notifications, and updates
                  directly to users' WhatsApp, ensuring timely communication.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header >
                  <h5 className="plat-head">Global Reach</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Leverage WhatsApp's global reach, connecting with users
                  across geographical boundaries effortlessly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h5 className="plat-head">User Data Security</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Prioritize user data security with end-to-end encryption,
                  ensuring a secure communication environment.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>




          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 order-2 order-lg-2">
            <img
              src={plat1}
              className="plat-img  imh mt-4 img-fluid"
              alt="Platform"
            />
          </div>
        </div>
      </div>
      <div className="container indus-top" >

        <div className="row" id="Instagram" ref={instagramRef}>

          <div className="col-lg-6 mt-5 order-2 order-lg-1">
            {" "}
            <img
              src={plat2}
              className="plat-img imh1 img-fluid"
              alt="Platform"
            />
          </div>

          <div className="col-lg-6  mt-5 order-1 order-lg-1">
            <h2 className="main-inus-head">Instagram</h2>
            <Accordion className="accord-plat" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header

                >
                  <h5 className="plat-head">Direct Communication</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Engage directly with our audience through comments, direct
                  messages, and interactive features.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header

                >
                  <h5 className="plat-head">Data-Driven Strategy</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Utilize analytics to refine our content strategy and enhance
                  user experience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-plat" >
                <Accordion.Item eventKey="2">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">User-generated Content</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Encourage users to share their experiences with our products
                    or services, fostering a sense of community.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">Clickable Links</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Utilize the "Swipe Up" feature in Stories for direct links
                    to our website, products, or specific promotions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">CTA Buttons</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Use Instagram Shopping and CTA buttons to drive traffic and
                    conversions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>


          </div>
        </div>
      </div>
      <div className="container indus-top">

        <div className="row" id="Telegram" ref={telegramRef}>

          <div className="col-lg-6 mt-5 p-1 order-1 order-lg-1">
            <h2 className="main-inus-head">Telegram</h2>
            <Accordion className="accord-plat" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header

                >
                  <h5 className="plat-head">Content Distribution</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Easily distribute multimedia content, including images,
                  documents, and videos.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header

                >
                  <h5 className="plat-head">User Engagement</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Gather feedback and opinions through Telegram polls and
                  surveys.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-plat" >
                <Accordion.Item eventKey="2">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">Cross-Platform Compatibility</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Telegram is accessible on various devices, allowing users to
                    engage from desktops, tablets, and mobile phones.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">User Engagement Metrics</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Leverage Telegram analytics to track user engagement,
                    message open rates, and other relevant metrics.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">End-to-End Encryption</h5>
                  </Accordion.Header>
                  <Accordion.Body>End-to-End Encryption</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>


          </div>
          <div className="col-lg-6 mt-5 order-2 order-lg-1">
            {" "}
            <img
              src={plat3}
              className="plat-img imh img-fluid"
              alt="Platform"
            />
          </div>
        </div>
      </div>
      <div className="container indus-top">

        <div className="row" id="Facebook" ref={facebookRef}>
          <div className="col-lg-6 mt-5 order-2 order-lg-1">
            {" "}
            <img
              src={plat4}
              className="plat-img w-100 img-fluid"
              alt="Platform"
            />
          </div>
          <div className="col-lg-6 mt-5 p-1 order-1 order-lg-1">
            <h2 className="main-inus-head mb-5">Facebook</h2>
            <Accordion className="accord-plat" defaultActiveKey="0" >
              <Accordion.Item eventKey="0" >
                <Accordion.Header

                >
                  <h5 className="plat-head">Social Community Hub</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Utilize Facebook's vast user base as a centralized hub for
                  community interactions, discussions, and brand advocacy.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header

                >
                  <h5 className="plat-head">Targeted Advertising</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Leverage Facebook's robust advertising platform to reach
                  specific demographics and target audiences effectively.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-plat" >
                <Accordion.Item eventKey="2">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">Integrated Analytics</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Access comprehensive analytics tools provided by Facebook,
                    offering valuable insights into user behavior and content
                    performance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">Brand Customization</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Customize our brand presence with a dedicated Facebook page,
                    showcasing our values, mission, and unique selling
                    propositions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">Global Reach and Localization</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Tap into Facebook's global reach while tailoring content for
                    localized campaigns to connect with diverse audiences.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>

          </div>
        </div>
      </div>
      <div className="container indus-top p-5 mt-3">
        <h2 className="main-inus-head">SMS</h2>
        <div className="row" id="SMS" ref={smsRef}>

          <div className="col-lg-6 mt-5 p-1">

            <Accordion className="accord-plat" defaultActiveKey="0" >
              <Accordion.Item eventKey="0">
                <Accordion.Header

                >
                  <h5 className="plat-head">No Internet Requirement</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Overcome connectivity barriers by utilizing SMS, making
                  information accessible even in areas with limited or no
                  internet connectivity.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header

                >
                  <h5 className="plat-head">High Open Rates</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Benefit from high open rates, as SMS messages are typically
                  read within minutes of receipt, enhancing the effectiveness of
                  time-sensitive communications.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion className="accord-plat">
                <Accordion.Item eventKey="2">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">Offline Interaction</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Engage users even when they are offline, making SMS an
                    effective channel for reaching audiences at any time.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">Authentication and Security</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Utilize SMS for secure user authentication, password resets,
                    and one-time passcodes, enhancing account security.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header

                  >
                    <h5 className="plat-head">Minimal App Fatigue</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    void app fatigue by leveraging SMS, providing essential
                    information without requiring users to navigate through a
                    separate application.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion>


          </div>
          <div className="col-lg-6 col-12 mt-5 ">
            <img
              src={plat5}
              className="plat-img  imh mt-4 img-fluid"
              alt="Platform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
