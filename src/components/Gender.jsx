import React, {Component} from 'react';
import {Form} from 'react-bootstrap';


class Gender extends Component {
    render() {
        return(
            <div>
                <label>Gender</label>
                {['radio'].map(type => (
                    <div key={`inline-${type}`} className="gender">
                      <Form.Check inline label="Male" type={type} id={`inline-${type}-1`} />
                      <Form.Check inline label="Female" type={type} id={`inline-${type}-2`} />
                      <Form.Check inline label="Other" type={type} id={`inline-${type}-3`}/>
                      <Form.Check inline label="Prefer not to say" type={type} id={`inline-${type}-3`}/>
                    </div>
                ))}
            </div>
        );
    }    
}

export default Gender;