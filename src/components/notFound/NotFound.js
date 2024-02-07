import React from "react";
import {Link} from "react-router-dom";
import "../../index.css"

const NotFound = () => {
  return(
      <div className="not-found-container">
          <h1 >Sorry, the page you were looking for does not exist</h1>
          <Link to="/">
              <button className="not-found container link-button">Return to Home</button>
          </Link>
      </div>
  )
}

export default NotFound;