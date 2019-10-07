import React, { Component } from 'react';
import { Form, Row, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';



class FormReg extends Component  {
    render() {
        return(
            <Row>
                <Form.Group className='col-6'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Please enter your" name="FullName" />
                </Form.Group>
                <Form.Group className='col-6'>
                    <Form.Label>Position are you applying for <a tabIndex="0" className="popover-link rounded-circle" id="example" role="button" data-toggle="popover" data-trigger="focus" title="Please applying your" data-content="Please select your position"><i class="fas fa-question-circle" ></i></a></Form.Label>
                    <Form.Control as="select" type="text" placeholder="Please enter your">
                        <option selected>Please enter your</option>
                        <option>Junior</option>
                        <option>Middle</option>
                        <option>Senior</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='col-6'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className='col-6'>
                    <Form.Label>Phone number</Form.Label>
                    <InputGroup>
                        <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="" id="input-group-dropdown">
                          <Dropdown.Item href="#">tel</Dropdown.Item>
                          <Dropdown.Item href="#">tel</Dropdown.Item>
                          <Dropdown.Item href="#">tel</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control placeholder="Phone number"/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className='col-6'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Please enter your country" id="country" />
                </Form.Group>
                <Form.Group className='col-6'>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="email" placeholder="Please enter your city" id="city" />
                </Form.Group>
                <Form.Group className='col-6'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" id="password" />
                </Form.Group>
                <Form.Group className='col-6'>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" id="confirm" />
                </Form.Group>
            </Row>
        );
    }
}

export default FormReg;