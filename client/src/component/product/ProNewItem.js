import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'
class ProNewItem extends Component {
    render() {
        let {product}= this.props;
        return (
            <Col xs={6} sm={4} md={4} lg={2}> 
                <Link to={`/product/${product.id}`} className="link-none">
                    <div className="pro-newitem pro-border">
                        <div className="pro-img"><img src={product.image}/></div>
                        <div className="pro-body">
                            <div className="pro-name">{product.name}</div>
                            <Row className="pro-new-detail">
                                <Col className="pro-price">Giá: <span>{product.price}{" "}</span>$</Col>
                                <Col className="pro-sold">Đã bán: {product.sold}</Col>
                            </Row>
                        </div>
                    </div>
                </Link>
            </Col>
        );
    }
}

export default ProNewItem;