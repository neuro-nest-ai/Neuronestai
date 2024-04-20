import React, { useState } from 'react';
import './demo.css'

const DemoForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email_id: '',
    job_title: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully');
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!formData.email_id.trim()) {
      errors.email_id = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email_id)) {
      errors.email_id = 'Invalid email address';
    }

    if (!formData.job_title.trim()) {
      errors.job_title = 'Job title is required';
    }

    return errors;
  };

  return (
    <div className="container-fluid demo-back mt-5 p-4">
      <div className="row">
        <div className="col-lg-1">&nbsp;</div>
        <div className="col-lg-5 col-11">
          <h5 className="text-info headin mt-5 ps-3">
            Experience The Future <br />
            With AI: Explore Our <br />
            Demo Showcase
          </h5>
          <ul className="add">
            <li>Step into the future with our AI Demo</li>
            <li>The power of Artificial Intelligence Through<br /> interactive Demos</li>
            <li>The various facts of AI technology while Encouraging Exploration And Learning</li>
            <li>Interact with AI Demos And Access Educational Resources</li>
            <li>The capabilities, Applications And Marvels of AI Technology</li>
          </ul>
        </div>
        <div className="col-lg-5 col-11 mt-2 demo-back2">
          <div className="wrapper">
            <form onSubmit={handleSubmit} action="https://formsubmit.co/neuronestai.23@gmail.com" method="POST">
              <div className="login_box">
                <div className="login-header">
                  <h4 className="demo-form-head text-center mb-4 ">
                    Schedule a Demo
                  </h4>
                </div>
                <div className="input_box mt-2">
                  <input
                    type="text"
                    id="username"
                    className="input-field"
                    required
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && <div className="error">{errors.username}</div>}
                  <label htmlFor="Enter your Name" className="label">
                    Enter your Name
                  </label>
                </div>
                <div className="input_box mt-2">
                  <input
                    type="email"
                    id="email_id"
                    className="input-field"
                    required
                    value={formData.email_id}
                    onChange={handleChange}
                  />
                  {errors.email_id && <div className="error">{errors.email_id}</div>}
                  <label htmlFor="Enter your Business Email" className="label">
                    Enter your Business Email
                  </label>
                </div>
                <div className="input_box mt-2">
                  <input
                    type="text"
                    id="job_title"
                    className="input-field"
                    required
                    value={formData.job_title}
                    onChange={handleChange}
                  />
                  {errors.job_title && <div className="error">{errors.job_title}</div>}
                  <label htmlFor="Enter Job Title" className="label">
                    Enter your industries
                  </label>
                </div>
                <div className="form-group mt-">
                  <textarea
                    id="comments"
                    rows="1"
                    placeholder=""
                    className="input-field1"
                    value={formData.comments}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="comments" className="myTextarea label">
                    Enter your comments
                  </label>
                </div>
                <div className="">
                  <button type="submit" className=" btn-book2">
                    Book A Demo
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-1">&nbsp;</div>
      </div>
    </div>
  );
};

export default DemoForm;
 