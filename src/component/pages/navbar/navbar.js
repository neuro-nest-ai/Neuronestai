import React, { useEffect ,useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons';


import './nav.css';
import logo from "../../assets/logio.png";
import tog from "../../assets/kk.png";
export default function TopNav() {

  
  const location = useLocation();
  const navigate = useNavigate();
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const handleNavbarCollapse = () => {
    setNavbarExpanded(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleNavbarCollapse(); // Close the navbar on location change
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.Conversational_Marketing]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.Conversational_Commerce]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.Conversational_Support]);
  

  return (
    <div className="container-fluid nav-back">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg d-flex nav-back fixed-top navbar-responsive ">
          <div className="container-fluid">
         
          <h2
  className="navbar-toggler " 
  onClick={handleNavbarToggle} 
  style={{ border: "1px solid black" }}
>
  {navbarExpanded ? (
    <FontAwesomeIcon className="text-light" icon={faXmark} />
  ) : (
    <span> <img className="tog" src={tog} alt="img"/></span>
  )}
</h2>



            <div className="ps-2 justify-content-between">
            <Link to="/" className="">
              <img src={logo} className="img-fluid " alt="logo"  style={{height:'3rem',width:'10rem' }} />
            </Link>
            </div>
            <div className={`collapse navbar-collapse justify-content-around ${
                navbarExpanded ? "show" : ""
              }`} id="navbarNav">
              <ul className="navbar-nav  nave-text">
                <li className="nav-item ps-lg-3">
                  <Link className="nav-link  nave-text  text-light text-start" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item ps-lg-3 dropdown">
                  <Link
                    className="nav-link nav-link  text-start text-light  nave-text "
                    to="/Conversational_Marketing"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    
                  >
                    Solutions <span className="fadown" ><FontAwesomeIcon icon={faAngleDown} /></span>

                  </Link>
                  <div
                    className="dropdown-menu"
                    style={{
                      backgroundColor: "black",
                      border: "2px solid black",
                    }}
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className="dropdown-item  text-light nm"
                      style={{ border: "2px solid black" }}
                      to="/Conversational_Marketing"
                    >
                      Conversational Marketing
                    </Link>
                    <Link
                      className="dropdown-item text-light nm"
                      to="/Conversational_Commerce"
                    >
                      Conversational Commerce
                    </Link>
                    <Link
                      className="dropdown-item text-light nm"
                      to="/Conversational_Support"
                    >
                      Conversational Support
                    </Link>
                    <Link
                      className="dropdown-item text-light nm"
                      to="/Conversational_Support"
                    >
                      KRI/KPI Solutions
                    </Link>
                  </div>
                </li>

                <li className="nav-item ps-lg-3 dropdown">
                  <Link className="nav-link   nave-text text-start text-light " to="/Platform" id="platformDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Platform <span className="fadown" ><FontAwesomeIcon icon={faAngleDown} /></span>
                  </Link>
                  <div className="dropdown-menu" style={{ backgroundColor: "black", border: "2px solid black" }} aria-labelledby="platformDropdown">
                    <Link className="dropdown-item text-white nm" style={{ border: "2px solid black" }} to="/Platform#whatsappRef">
                     Whatsapp
                    </Link>
                    <Link className="dropdown-item text-white nm" to="/Platform#instagramRef">
                    Instagram
                    </Link>
                    <Link className="dropdown-item text-white nm" to="/Platform#telegramRef">
                    Telegram
                    </Link>
                    <Link className="dropdown-item text-white nm" to="/Platform#facebookRef">
                    Facebook
                    </Link>
                    <Link className="dropdown-item text-white nm" to="/Platform#smsRef">
                    SMS
                    </Link>
                  </div>
                </li>
                <li className="nav-item ps-lg-3 dropdown">
                  <Link className="nav-link  nave-text text-start   text-light " to="IndustryMain" id="IndustryMain#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Industries <span className="fadown" ><FontAwesomeIcon icon={faAngleDown} /></span>
                  </Link>
                  <div className="dropdown-menu" style={{ backgroundColor: "black", border: "2px solid black" }} aria-labelledby="platformDropdown">
                    <Link className="dropdown-item text-white nm" style={{ border: "2px solid black" }} to="/IndustryMain#ecommerce">
                    E-commerce
                    </Link>
                    
                    <Link className="dropdown-item text-white nm" to="/IndustryMain#Education">
                      Education
                    </Link>
                    <Link className="dropdown-item text-white nm" to="/IndustryMain#Food">
                      Food
                    </Link>
                    <Link className="dropdown-item text-white nm" to="/IndustryMain#Travel">
                      Travel
                    </Link>
                    <Link className="dropdown-item text-white nm" to="/IndustryMain#Entertainment">
                      Entertainment
                    </Link>
                    <Link className="dropdown-item text-white nm" to="/IndustryMain#RealEstate">
                      Real Estate
                    </Link>
                    <Link className="dropdown-item text-white nm" to="/IndustryMain#Logistics">
                      Logistics
                    </Link>
                    <Link className="dropdown-item text-white nm" to="/IndustryMain#Healthcare">
                      Healthcare
                    </Link>
                  </div>
                </li>
                <li className="nav-item ps-lg-3">
                  <Link className="nav-link text-start  nave-text" to="/contact_us">
                    ContactUs
                  </Link>
                </li>
              </ul>
              
            </div>
            
            <div className="d-flex justify-content-evenly "><Link to="/Book_a_Demo">  <button type="button" className="text-white  btn-book  "  onClick={() => navigate("/Book_a_Demo")}>
              Book A Demo
            </button></Link></div>
          </div>
        </nav>
      </div>
    </div>
  );
}
