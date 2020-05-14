import React, { Component } from 'react';
import {Col, Card, Button} from 'react-bootstrap';
class ProNewItem extends Component {
    render() {
        let {product}= this.props;
        return (
            <Col xs={4} sm={4} md={2} lg={2}>
                <div className="pro-newitem pro-border">
                    <div className="pro-img"><img src={product.image}/></div>
                    <div className="pro-body">
                        <div className="pro-name">{product.name}</div>
                        <div className="pro-new-detail">
                            <div className="pro-price">Giá: <span>{product.price}{" "}</span>$</div>
                            <div className="pro-sold">Đã bán: {product.sold}</div>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}

export default ProNewItem;