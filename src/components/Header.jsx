import React from 'react';
import { Col } from 'react-bootstrap';


function Header () {
    return (
        <div className="header">
            <div>
                <h1>Registration</h1>
            </div>
            <Col className="col-3 buttons">
                <div>
                    <button className="btn-lang active" type="button">En</button>
                    <button className="btn-lang" type="button">Ru</button>
                </div>
            </Col>
        </div>
    );
}
export default Header;
