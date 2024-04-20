import React from 'react'

export default function Testimonials() {
  return (
    <div>
        <div className="container back-video ">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
         <video autoPlay controls loop muted poster className="video">
        <source src="https://yellow.ai/wp-content/uploads/2023/04/yellow-hero-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      
        </div>
        <div className="col-lg-3"></div>
      </div>
      </div> 
    </div>
  )
}
