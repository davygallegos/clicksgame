import React from "react";


class Nav extends React.Component {
    // Setting the initial  of the Nav component
  
    // The render method returns the JSX that should be rendered
    render() {
      return (
        <nav>
        <div className="nav-wrapper" className="card-panel teal lighten-2">
          <a href="#" className="brand-logo" class="left">Clicky Game</a>
          <a href="#" className="brand-logo" class="right">Your Guess</a>
          <a href="#" className="brand-logo" class="center-align">Score</a>

        </div>
      </nav>
      
     );
    }
  }
  
  export default Nav