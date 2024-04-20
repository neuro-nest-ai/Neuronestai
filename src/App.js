import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Landing pages/home";
import About from "./component/pages/Landing pages/about";
import Solution from "./component/pages/Landing pages/solution";
import Footer from "./component/pages/footer/footer";
import Industry from "./component/pages/Landing pages/industry";
import Contact from "./component/pages/contactUs/contact";
import Platform from "./component/pages/Landing pages/platform";
import Home_market from "./component/pages/solution pages/Marketing/home_market";
import Convo_market from "./component/pages/solution pages/Marketing/convo_market";
import Home_Commerce from "./component/pages/solution pages/commerce/home_commerce";
import Convo_Commerce from "./component/pages/solution pages/commerce/commerce";
import Home_Support from "./component/pages/solution pages/support/home_support";
import Convo_Support from "./component/pages/solution pages/support/support";
import TopNav from "./component/pages/navbar/navbar";
import Home_Platform from "./component/pages/platform/homeplatform";
import Platchannel from "./component/pages/platform/plat";
import Home_Industry from "./component/pages/industry/home_indus";
import Indus from "./component/pages/industry/indus";
import Demo from "./component/pages/Demo/demo";
import GoToTop from "./component/pages/Landing pages/gotoTob";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={[ <TopNav/>,<Home />, <About />,<Solution />,<Platform/>,<Industry />,<GoToTop/>, <Footer />, ]}/>
          <Route path="/Conversational_Marketing" element={[<TopNav/>,<Home_market/>,<Convo_market/>,<GoToTop/>,<Footer/>]} />
          <Route path="/Conversational_Commerce" element={[<TopNav/>,<Home_Commerce/>,<Convo_Commerce/>,<GoToTop/>,<Footer/>]} />
          <Route path="/Conversational_Support" element={[<TopNav/>,<Home_Support/>,<Convo_Support/>,<GoToTop/>,<Footer/>]} />
          <Route path="/platform" element={[<TopNav/>,<Home_Platform/>,<Platchannel/>,<GoToTop/>,<Footer/>]} />
          <Route path="/IndustryMain" element={[<TopNav/>,<Home_Industry/>,<Indus/>,<GoToTop/>,<Footer/>]}/>
          <Route path="/contact_us" element={[<TopNav/>,<Contact/>,<GoToTop/>,<Footer/>]}/>
          <Route path="/Book_a_Demo" element={[<TopNav/>,<Demo/>,<GoToTop/>,<Footer/>]}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
