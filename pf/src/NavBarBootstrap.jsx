import React, { Component } from 'react';
import {TabContainer, Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import Test from './Test.jsx';
import YourInfo from './YourInfo.jsx';
import { iosGlassesOutline  } from 'react-icons-kit/ionicons/iosGlassesOutline';  
import './Navbar.css';


export default class NavBarBootstrap extends Component{
    render(){
        return(
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="clearfix">
                <Col sm={2}>
                    {/*figure out how to add react icons to navbar*/}
                    <Nav bsStyle="" stacked>
                        <NavItem eventKey="look">Keep Looking
                            {/*<SvgIcon size={20} icon={iosGlassesOutline }/>*/}
                            {/*<i className="fa fa-envelope fa-fw"></i>*/}
                        </NavItem>
                        <NavItem eventKey="matches">Matches</NavItem>
                        <NavItem eventKey="preferences">Preferences</NavItem>
                        <NavItem eventKey="yourInfo">Your Info</NavItem>
                        <NavItem eventKey="payment">Payment</NavItem>
                        <NavItem eventKey="help">Help</NavItem>
                    </Nav>
                </Col>
                <Col sm={8}>
                    <Tab.Content animation>
                    <Tab.Pane eventKey="look">
                        <Test />  
                    </Tab.Pane>
                    <Tab.Pane eventKey="yourInfo">
                        <YourInfo/>
                    </Tab.Pane>
                    </Tab.Content>
                </Col>
                </Row>
            </Tab.Container>
        );
    }
}