import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';




class Registration extends Component {
  render () {
    return(
        <Row className="title">
          <Col className="">
              <h1>Registration</h1>
          </Col>
          <Col className="col-3 buttons">
            {['button'].map(type =>(
              <div>
                <button className="btn-lang active" type={type}>En</button>
                <button className="btn-lang" type={type}>Ru</button>
              </div>
            ))}
          </Col>
        </Row>
      );
  }
  
}

export default Registration;