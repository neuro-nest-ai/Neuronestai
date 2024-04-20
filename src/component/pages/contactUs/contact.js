import { React, useState } from "react";
import "./contact.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    messages: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();



    try {
      const response = await fetch("http://localhost:3003/contact_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


    } catch (error) {
      console.error("Error:", error);


    }
  };



  return (
    <div className="contact-bg">
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-lg-12 mt-5">
            <h1 className="text-center contact-para">
              Love To Hear From You, Get In Touch
            </h1>
            <h3 className="text-center contact-subtitle mt-3">
              Neuro Nest AI Solutions, we specialize in empowering businesses
              through innovative AI-driven solutions. Our platform offers a
              <br />
              comprehensive suite of tools designed to enhance customer
              engagement, streamline operations, and drive business growth
            </h3>
          </div>

          <form className="for" onSubmit={handleSubmit}>
            <div className="row   mt-3 ">
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <label>Your Name</label>
                <br></br>
                <input
                  type="text"
                  id="username"
                  className="form-control "
                  placeholder="Enter Your Name"
                  value={formData.username}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <label>E-mail</label>
                <br></br>
                <input
                  type="text"
                  id="email"
                  className="form-control half-border"
                  placeholder="Enter a Valid email id"
                  value={formData.email_id}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-2"></div>
              <div className="col-lg-9 pe-5">
                <label> Sent Message</label>
                <textarea
                  class="form-control justify-content-center hariGuhan"
                  placeholder="Type your Messages...."
                  id="messages"
                  value={formData.messages}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-lg-2"></div>
            </div>

            <div class="container">
              <div class="row justify-content-center">
                <div class="col-12 col-md-6 text-center  p-4">

                  <button class="btn  btn-contact text-light ">Send</button>


                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
