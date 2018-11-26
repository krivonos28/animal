import React, { Component } from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './css/index.css'


class JoinPageComponent extends Component{

    render() {
        console.log(this.props);
        return (
          <div className = "joincomponent">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.props.animalStore.join.signInUp === 'signIn' })}
                  onClick={ this.props.onTurnonSignIn}
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
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row></div>
              </TabPane>
              <TabPane tabId="signUp">
               <div><Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
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
