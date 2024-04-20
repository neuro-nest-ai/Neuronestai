import {React,useEffect} from "react";
import "./homeplatform.css";
import common1 from "../../assets/introall.jpg";
export default function Home_Platform() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="common-home">
      <div className="container home_inud mt-5 p-2">
        <div className="row ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 homecom5">
            <h2 className="com-head ">
              Hey there! Ready to elevate your business? Say hello to AI-powered
              chatbots!
            </h2>
            <p className="com-para">
              Imagine having personalized, 24/7 customer support and seamless
              interactions. Our chatbots aren't just assistants; they're the
              superheroes of efficiency! Streamline your operations, engage
              customers intelligently, and witness the magic of conversational
              marketing.
            </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
          </div>
          <div className="col-lg-6  mb-5 ">
            <img src={common1} className="homeimg5 img-fluid"/>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
}
