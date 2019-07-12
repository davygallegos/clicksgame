import React from "react";
import {  CardImg, Card, Container, Row, Col} from "shards-react";


class Gameimg extends React.Component {
    // Setting the initial  of the Nav component
  
    // The render method returns the JSX that should be rendered
    render() {
      return (

// export default function BasicCardExample() {
//   return (
  <Container>
    <Row>
    <Col>
    <div>
    <Card style={{ maxWidth: "200px" }}>
      <CardImg src="https://place-hold.it/300x200" />
    </Card>
        </div>
    </Col>
    <Col>
    <Card style={{ maxWidth: "200px",  }}>
      <CardImg src="https://place-hold.it/300x200" />
    </Card>
    </Col>    
    <Col>
    <Card style={{ maxWidth: "200px",  }}>
      <CardImg src="https://place-hold.it/300x200" />
    </Card>
    </Col>    
    <Col>
    <Card style={{ maxWidth: "200px",  }}>
      <CardImg src="https://place-hold.it/300x200" />
    </Card>
    </Col>    
    </Row>
  </Container>
  );
      }
    }
  export default Gameimg

