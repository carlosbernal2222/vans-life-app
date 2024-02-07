import React from "react";
import "./Hero.css"
import {Link} from "react-router-dom";
const Hero = () => {
  return(
      <div className='hero-container'>
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link to="vans">Find your van</Link>
      </div>
  )
}

export default Hero
