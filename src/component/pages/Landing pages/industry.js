import {React,useRef,useState,useEffect} from "react";
import {useLocation} from "react-router-dom";

import { FaMoneyCheck } from "react-icons/fa";
import { FaGraduationCap, FaPlane } from "react-icons/fa";
import { TbMathIntegrals } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import {
  MdOutlineMedicalServices,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa6";
import "./industry.css";
import { Link } from "react-router-dom";
export default function Industry() {
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

  

  return (
    <div className="bg-indus">
      <div className="container-fluid p-4">
        <div className="row ">
          <div className="col-lg-12 mt-5 indus-content text-center">
            <h3>
              WE BELEIVE GOVERNMENT SHOULD BE <br />
              KEPT SEPERATE FROM MANAGEMENT
            </h3>
          </div>
        </div>

        <div className="row  text-center justify-content-center gap-3 mt-5 p-3 ">
          <div className="col-lg-2 card hover-effect" ref={ecommerce}>
            <div className="row mt-2">
              <div className="col-sm-4"></div>
              <div className="col-sm-5 icon-round ml-5">
                {" "}
                <FaMoneyCheck
                  className="icons  border border-rounded-circle  "
                  style={{ color: "#0075FF" }}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <h4 className="edu-head mt-2">E-Commerce</h4>
            <p className="para-indus">Create conversational sales</p>
            <Link to="/IndustryMain#ecommerce" className="text-primary indus-readmore">
              read more <FaGreaterThan />
            </Link>
          </div>
          <div className="col-lg-2 card hover-effect"ref={Education}>
            <div className="row mt-2">
              <div className="col-sm-4"></div>
              <div className="col-sm-5 icon-round ml-5">
                {" "}
                <FaGraduationCap
                  className="icons border border-rounded-circle  "
                  style={{ color: "#0075FF" }}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <h4 className="edu-head mt-2">Education</h4>
            <p className="para-indus">Imporve Educational Quailty for future</p>
            <Link to="/IndustryMain#Education" className="text-primary indus-readmore">
              read more <FaGreaterThan />
            </Link>
           
          </div>
          <div className="col-lg-2 card hover-effect" ref={Food}>
            <div className="row mt-2">
              <div className="col-sm-4"></div>
              <div className="col-sm-5 icon-round ml-5">
                {" "}
                <IoFastFoodOutline
                  className="icons  border border-rounded-circle  "
                  style={{ color: "#0075FF" }}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <h4 className="edu-head mt-2">Food</h4>
            <p className="para-indus">Transforming food sales experiences</p>
            <Link to="/IndustryMain#Food" className="text-primary indus-readmore">
              read more <FaGreaterThan />
            </Link>
          </div>
          <div className="col-lg-2 card hover-effect" ref={Travel}>
            <div className="row mt-2">
              <div className="col-sm-4"></div>
              <div className="col-sm-5 icon-round ml-5">
                {" "}
                <FaPlane
                  className="icons border border-rounded-circle  "
                  style={{ color: "#0075FF" }}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <h4 className="edu-head mt-2">Travel</h4>
            <p className="para-indus">Enhance travel booking interactions</p>
            <Link to="/IndustryMain#Travel" className="text-primary indus-readmore">
              read more <FaGreaterThan />
            </Link>
           
          </div>
        </div>
        <div className="row  text-center justify-content-center gap-3 ">
          <div className="col-lg-2 card mb-4 hover-effect" ref={Logistics}>
            <div className="row mt-2">
              <div className="col-sm-4"></div>
              <div className="col-sm-5 icon-round ml-5">
                {" "}
                <TbMathIntegrals
                  className="icons  border border-rounded-circle  "
                  style={{ color: "#0075FF" }}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <h4 className="edu-head mt-2">Logistics</h4>
            <p className="para-indus">Revolutionize logistical operations</p>
            <Link to="/IndustryMain#Logistics" className="text-primary indus-readmore">
              read more <FaGreaterThan />
            </Link>
           
          </div>
          <div className="col-lg-2 card mb-5 hover-effect" ref={Entertainment}>
            <div className="row mt-2">
              <div className="col-sm-4"></div>
              <div className="col-sm-5 icon-round ml-5">
                {" "}
                <BiCameraMovie
                  className="icons  border border-rounded-circle  "
                  style={{ color: "#0075FF" }}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <h4 className="edu-head1 mt-2 ">Entertainment</h4>
            <p className="para-indus">Innovate in the entertainment</p>
            
            <Link to="/IndustryMain#Entertainment"  className="text-primary indus-readmore">
              read more <FaGreaterThan />
            </Link>
          </div>
          <div className="col-lg-2 card mb-3 hover-effect" ref={RealEstate}>
            <div className="row mt-2">
              <div className="col-sm-4"></div>
              <div className="col-sm-5 icon-round ml-5">
                {" "}
                <MdOutlineRealEstateAgent
                  className="icons  border border-rounded-circle  "
                  style={{ color: "#0075FF" }}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <h4 className="edu-head mt-2">Real Estate</h4>
            <p className="para-indus">Redefine real estate <br/>experiences</p>
            <Link to="/IndustryMain#RealEstate" className="text-primary indus-readmore">
              read more <FaGreaterThan />
            </Link>
            
          </div>
          <div className="col-lg-2 card hover-effect" ref={Healthcare}>
            <div className="row mt-2">
              <div className="col-sm-4"></div>
              <div className="col-sm-5 icon-round ml-5">
                {" "}
                <MdOutlineMedicalServices
                  className="icons  border border-rounded-circle  "
                  style={{ color: "#0075FF" }}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>

            <h4 className="edu-head mt-2">HealthCare</h4>
            <p className="para-indus">Revolutionize patient care experiences</p>
            <Link to="/IndustryMain#Healthcare" className="text-primary indus-readmore">
              read more <FaGreaterThan />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
