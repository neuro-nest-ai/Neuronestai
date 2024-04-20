import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import videonest from '../../assets/Ai-video.mp4';
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h1 class="home-cont1 text-center ">
              Enable your Digital journey Transform Experiences
              With <br />Advanced Generation AI-Transform conversations that Evolve And Thrive
            </h1>
            <p className="home-para p-3">Experience a revolutionary era of engagement with our cutting-edge Dynamic Automation Platform,
              <br /> seamlessly integrating Generative AI to deliver unmatched personalized interactions.</p>
          </div>

        </div>
      </div>

    <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 text-center p-4">
            <a href="/Book_a_Demo">
              <button class="btn  btn-book1 ">Try For Free</button>
            </a>
          </div>
        </div>
      </div>
      <div className="container back-video mt-2">
  <div className="row justify-content-center">
    <div className="col-lg-12 text-center">
      <video autoPlay loop muted poster="" className="video img-fluid mb-4" style={{ maxWidth: "830px", height: "auto" }} controlsList="nodownload nofullscreen nomoreoption" disableRemotePlayback disablePictureInPicture controls={true}>
        <source src={videonest} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>



    </div>
  );
}
