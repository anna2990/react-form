import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';




class Registration extends Component {
  render () {
    return(
        <div className="title">
          <div className="registr">
              <h1>Registration</h1>
          </div>
          <Col className="col-3 buttons">
            {['button'].map(type =>(
              <div>
                <button className="btn-lang active" type={type}>En</button>
                <button className="btn-lang" type={type}>Ru</button>
              </div>
            ))}
          </Col>
        </div>
      );
  }
  
}

export default Registration ;