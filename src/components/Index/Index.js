import React from "react";

import Home from './../Home/Home';
import Work from './../Work/Work';
import Portfolio from './../Portfolio/Portfolio';
import Profile from './../Profile/Profile';
import About from './../About/About';
import SocialMedia from './../SocialMedia/SocialMedia';
import Footer from './../Footer/Footer';

const Index =()=>{
      return (
        <div className="App">
          <Home />
          <Work />
          <Portfolio />
          <Profile />
          <About />
          <SocialMedia />
          <Footer />
        </div>
      );
   
  }
  
  export default Index;
  