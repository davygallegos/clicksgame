import React from "react";


class Nav extends React.Component {
    // Setting the initial  of the Nav component
  
    // The render method returns the JSX that should be rendered
    render() {
      return (
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Clicky Game</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="badges.html">Was guess correct?</a></li>
            <li><a href="collapsible.html">Score</a></li>
          </ul>
        </div>
      </nav>
      
     );
    }
  }
  
  export default Nav