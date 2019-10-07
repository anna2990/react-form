import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Row, InputGroup, Dropdown, DropdownButton} from 'react-bootstrap';



class Input extends Component  {
    render() {
        const { label, name, placeholder, type } = this.props
        return (
            <Form.Group className='col-6'>
              <Form.Label>{label}</Form.Label>
              <Form.Control type={type} placeholder={placeholder} name={name} />
           </Form.Group>
          )
        }
      }

      class FormReg extends Component  {
        render() {
            return(
                <Row>
                    <Input label="Full Name"  name="FullName" placeholder="Please enter your"/>
                    <Form.Group className='col-6'>
                        <Form.Label>Position are you applying for 
                            <a tabIndex="0" className="popover-link rounded-circle" id="example" role="button" data-toggle="popover" data-trigger="focus" title="Please applying your" data-content="Please select your position">
                            <i class="fas fa-question-circle" ></i></a>
                        </Form.Label>
                        <Form.Control as="select" type="text">
                            <option selected value="Please enter your">Please enter your</option>
                            <option value="Junior"></option>
                            <option value="Middle">Middle</option>
                            <option value="Senior">Senior</option>
                        </Form.Control>
                    </Form.Group>
                    <Input label="Email" placeholder="email" name="email" />
                    <Form.Group className='col-6'>
                        <Form.Label>Phone number</Form.Label>
                        <InputGroup>
                            <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" id="input-group-dropdown">
                              <Dropdown.Item href="#">tel</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control placeholder="Phone number"/>
                        </InputGroup>
                    </Form.Group>
                    <Input label="Country" placeholder="Please enter your" name="country" />
                    <Input label="City" placeholder="Please enter your" name="city" />
                    <Input label="Password" type="password" placeholder="Password" id="password" />
                    <Input label="Confirm Password" type="password" placeholder="Confirm password" id="confirm" />
                </Row>
            );
        }
    }

export default FormReg;
