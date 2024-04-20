import React from 'react'
import './about.css';
import chat from '../../assets/about.png'
export default function About() {
  return (
    <div className='abt-back'>
      <div className="container ">
        <div className="row">
          <div className="col-lg-"></div>
          <div className="col-lg-12 mt-5">
            <h5 className='what text-center'>WHAT WE DO</h5>
            <h1 class="abt-cont">
            Explore the Distinction - Our Generative AI Bots Elevate Dialogue Beyond the Ordinary Chatbot Experience
            </h1>
          </div>

          <div className="col-lg-"></div>
        </div>
      </div>
      <div className='container mt-3'>
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-10 chat-img'>
                <img src={chat} className='chat-pic ' alt='img'/> 
            </div>
            <div className='col-lg-1'></div>
        </div>
      </div>
    </div>
  )
}
