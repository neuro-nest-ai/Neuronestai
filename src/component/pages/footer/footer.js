import { React, useEffect ,useRef} from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/homelogo.png";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <div>
      <div class="container-fluid text-light bg-footer">
        <div class="container ">
          <div class="row ">
            <div className="col-lg-1 mt-5 p-3">
              <img src={logo} width="75ch" height="50px" />
            </div>
            <div class="col-lg-11 mt-5 p-2">
              <h4>Neuro Nest AI</h4>
              <p class="">
                At Neuro Nest AI Solutions, we specialize in empowering
                bussinesses through innovative AI-driven solutions.
              </p>
            </div>
          </div>
          <div class="row justify-content-center y23  mt-4">
            <div class="col-lg-3  col-sm-6 col-md-6 col-12  y21">
              <ul class="list-unstyled">
               <li class="y22 mb-2 text-primary"> Home</li>
               <Link to="/" className="link-tagf footer"> <li>About Us</li>
                <li className="footer">Our services</li>
                <li className="footer">Privacy Policy</li></Link>
              </ul>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6  col-12 y21">
              <ul class="list-unstyled footer">
                <li class="y22 mb-2 text-primary">Solutions</li>
                <Link to="/Conversational_Marketing" className="link-tagf footer" ref={Conversational_Marketing}><li>Conversational marketing</li></Link>
                <Link to="/Conversational_Commerce" className="link-tagf footer"ref={Conversational_Commerce}><li>Conversational commerce</li></Link>
                <Link to="/Conversational_Support" className="link-tagf footer" ref={Conversational_Support}><li>Conversational support</li></Link>
                <Link to="/Conversational_Support" className="link-tagf footer" ref={Conversational_Support}><li>KRI/KPI solutions</li></Link>
              </ul>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6 col-12  y21">
            <ul class="list-unstyled footer">
                <li class="y22 mb-2 text-primary">Industry</li>
                <Link to="/Platform#whatsappRef" className="link-tagf  footer"><li>Whatsapp</li></Link>
                <Link to="/Platform#instagramRef" className="link-tagf  footer"> <li>Instgram</li></Link>
                <Link to="/Platform#telegramRef" className="link-tagf  footer"><li>Telegram</li></Link> 
                <Link to="/Platform#facebookRef" className="link-tagf  footer"><li>Facebook</li></Link> 
                <Link to="/Platform#smsRef" className="link-tagf  footer"><li>SMS</li></Link> 
              </ul>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6 col-12 y21 ">
              <ul class="list-unstyled footer ">
                <li class="y22 mb-2 text-primary">Industry</li>
                <Link to="/IndustryMain#ecommerce" className="link-tagf footer"><li>E-commerce</li></Link>
                <Link to="/IndustryMain#Education" className="link-tagf  footer"> <li>Education</li></Link>
                <Link to="/IndustryMain#Food" className="link-tagf  footer"><li>Food</li></Link> 
                <Link to="/IndustryMain#Travel" className="link-tagf  footer"><li>Travel</li></Link> 
                <Link to="/IndustryMain#Entertainment" className="link-tagf  footer"><li>Entertainment</li></Link> 
                <Link to="/IndustryMain#RealEstate" className="link-tagf  footer"><li>Real Estate</li></Link> 
                <Link to="/IndustryMain#Logistics" className="link-tagf  footer"><li>Logistics</li></Link> 
                <Link to="/IndustryMain#Healthcare" className="link-tagf  footer"><li>Healthcare</li></Link> 
              </ul>
            </div>

            
          </div>
          <div class="row">
          <div class="col-lg-6  col-sm-6 col-md-6 col-12  text-end">
            <h6 className="text-start text-primary">Address:</h6>
                
              <p class="y1 y21 mt-3 text-start">
              
                3G, A block, Pioneer Apartments, Near
                <br />
                hotel Residency towers, Avinashi Rd,
                <br />
                Coimbatore,Tamil Nadu 641018
              </p>
            </div>
            <div class="col-lg-6 col-12 col-sm-6 col-md-6 mb-1  mt-4
            y21 y23">
              <p class="mb-1">+91 99-42-620-943</p>
              <p>Neuronestai.23@gmail.com</p>
               <a href="https://wa.me/919942620943?  text=Hi how are you." target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="mb-1 contact-icon fa-1x" /></a>
              <FontAwesomeIcon icon={faTelegram} className="ps-2 fa-1x ps-3 mb-1 contact-icon" />
              <FontAwesomeIcon icon={faLinkedin} className="ps-2 fa-1x ps-3 mb-1 contact-icon" />
              <FontAwesomeIcon icon={faTwitter} className="ps-2 fa-1x ps-3 mb-1 contact-icon" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 y21 y23 d-flex justify-content-center r">
              <i class="fa-regular fa-copyright mt-1"></i>
              <p class="ps-2 mt-4">2024 Neuro Nest AI.All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
