import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, Row, Col, Label, Form, FormGroup, Input } from 'reactstrap';
import classnames from 'classnames';
import './css/index.css'


class JoinPageComponent extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="joincomponent">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.props.animalStore.join.signInUp === 'signIn' })}
                            onClick={this.props.onTurnonSignIn}
                        >
                            Sign In
                </NavLink>
                    </NavItem>
                    <NavItem>
                        
                            <NavLink
                                className={classnames({ active: this.props.animalStore.join.signInUp === 'signUp' })}
                                onClick={this.props.onTurnonSignUp}
                            >
                                Sign Up
                     </NavLink>
                        
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.props.animalStore.join.signInUp}>
                    <TabPane tabId="signIn">
                        <div> <Row>
                        <Link to="/animals"><Button onClick={this.props.onJoin}>Sign In</Button></Link>
                        </Row></div>
                    </TabPane>
                    <TabPane tabId="signUp">
                        <div><Row>
                            <Col sm="6">
                                <Card body>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                        </FormGroup>
                                    </Form>
                                    <Button></Button>
                                </Card>
                            </Col>
                        </Row>
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
export const JoinPage = JoinPageComponent;
