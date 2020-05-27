import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'
class ProductBox extends Component {
    render() {
        let {product}= this.props;
        return (
            <Col xs={6} sm={4} md={4} lg={2}> 
                <Link to={`/product/${product.pro_id}`} className="link-none">
                    <div className="pro-newitem pro-border">
                        <div className="pro-img"><img src={product.pro_image}/></div>
                        <div className="pro-body">
                            <div className="pro-name">{product.pro_name}</div>
                            <Row className="pro-new-detail">
                                <Col className="pro-price">Giá: <span>{product.pro_price}{" "}</span>$</Col>
                                <Col className="pro-sold">Đã bán: {product.pro_sold}</Col>
                            </Row>
                        </div>
                    </div>
                </Link>
            </Col>
        );
    }
}

export default ProductBox;