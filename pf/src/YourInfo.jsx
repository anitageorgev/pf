import React, {Component} from 'react';
import {Form, Checkbox, Radio, FormGroup, ControlLabel, FormControl, Button, HelpBlock} from 'react-bootstrap';
import './YourInfo.css';

export default class YourInfo extends Component{
render(){
    return(
        <div>
            <p>Tell us a little about yourself...</p>
            <form>  
                {/*Languages*/}
                <FormGroup>
                What language are you MOST comfortable speaking? {' '}
                <Checkbox inline>Malayalam</Checkbox>{' '}
                <Checkbox inline>English</Checkbox>{' '}
                <Checkbox inline>Other</Checkbox>{' '}
                </FormGroup>
                
                {/*Gender*/}
                <FormGroup>
                    <Radio name="radioGroup" inline>Female</Radio>{' '}
                    <Radio name="radioGroup" inline>Male</Radio>{' '}
                </FormGroup>

                {/*Education Level*/}
                <FormGroup controlId="formControlsEducationLvl">
                    <ControlLabel>Gender</ControlLabel>
                    <FormControl componentClass="select" placeholder="educationLvl">
                        <option value="bachelor">Bachelor</option>
                        <option value="masters">Masters</option>
                        <option value="doctorate">Doctorate</option>
                        <option value="other">Other</option>
                    </FormControl>
                </FormGroup>
                
                {/*Age*/}
                <FieldGroup id="formControlsText" type="text" label="Age" placeholder="ABC Corp."/>

                {/*Current Employer*/}
                <FieldGroup id="formControlsText" type="text" label="Where do you work?" placeholder="ABC Corp."/>

                {/*Religion*/}
                <FormGroup>                    
                    Religion {' '}
                    <Radio name="radioGroup" inline>Roman Catholic</Radio>{' '}                    
                    <Radio name="radioGroup" inline>Mormon</Radio>{' '}
                </FormGroup>

                {/*Location*/}
                <FormGroup>
                Where do you live?{' '}
                <Form inline>
                    <FieldGroup id="formControlsText" type="text" label="City" placeholder="Bangalore"/>{' '}
                    <FieldGroup id="formControlsText" type="text" label="State" placeholder="Karnataka"/>
                </Form>
                </FormGroup>

                {/*LinkedIn and Fb*/}                    
                <FieldGroup class="width-50" id="formControlsText" type="text" label="LinkedIn Profile" bsSize="small" placeholder="www.facebook.com/username"/>{' '}
                <FieldGroup id="formControlsText" type="text" label="Facebook Profile" bsSize="small" placeholder="www.linkedin.com/username"/>

                <Checkbox checked readOnly>Checkbox</Checkbox>

                <FieldGroup id="formControlsFile" type="file" label="File" help="Example block-level help text here."/>

                

                <Button type="submit">
                Submit
                </Button>
            </form>
        </div>
    );
}
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
