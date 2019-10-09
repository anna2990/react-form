import React from 'react';
import {Image, Col, Row, Container} from 'react-bootstrap';
import img from '../img.png';
import Header from "./Header";
import FormContainer from "./FormContainer";
import Footer from './Footer';

import './App.css';


function App () {
  return (
    <Container className="container" >
      <Row>
        <Image className=" image-block" src={img} alt=""></Image>
          <Col className="content">
            <div className="col">
              <Header />
              <FormContainer />
              <Footer />
            </div>
          </Col>
      </Row>
    </Container>
  );
}

export default App;
