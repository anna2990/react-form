import React, {Component} from 'react';
import {Image, Col, Row, Container, Form} from 'react-bootstrap';
import img from '/Users/user/react/react-form/my-app/src/img.png';
import Registration from './Registration';
import FormContainer from './FormContainer';
import Gender from './Gender';
import Foot from './Foot';

import './App.css';


class App extends Component {
  render() {
    return (
      <Container className="container">
        <Row className="form-box">
          <Image className="col-5 image-block" src={img} alt=""></Image>
              <Col className="col-7 form-item">
                <Registration />
                <Form className="form">
                  <FormContainer />
                  <Gender />
                  <Foot />
                </Form>
              </Col>
            </Row>
      </Container>
    );
  }
}
  

export default App;
