import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";


class Banner extends React.Component {
    // Setting the initial  of the Nav component
  
    // The render method returns the JSX that should be rendered
    render() {
      return (
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>      
     );
    }
  }
  
  export default Banner