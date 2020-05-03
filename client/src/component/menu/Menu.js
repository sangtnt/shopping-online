import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import MenuTop from './MenuTop';
import MenuSearch from './MenuSearch'
class Menu extends Component {
    render() {
        return (
        <div className="menu-space">
            <Row className="menu-container">
                <Col>
                   <Row>
                        <MenuTop/>
                   </Row>
                   <Row>
                        <MenuSearch/>
                   </Row>
                </Col>
            </Row>
        </div>
        );
    }
}

export default Menu;