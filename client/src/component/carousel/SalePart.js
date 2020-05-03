import React, { Component } from 'react';
import SellSlider from './SellSlider';
import {Row, Col} from 'react-bootstrap'
class SalePart extends Component {
    render() {
        return (
            <Row className="sale-container">
                <Col md={8}>
                    <SellSlider/>
                </Col>
                <Col md={4}>
                    <Row className="sale-2">
                        <Col xs={6} md={12}><img src="../images/img4.jpg"/></Col>
                        <Col xs={6} md={12}><img src="../images/blackfriday16.jpg"/></Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default SalePart;