import React, { Component } from 'react';
import Axios from 'axios';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Quantity from './Quantity';
import SameCat from './SameCat';
class ProDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            product:{}
        }
    }
    componentDidMount(){
        document.body.classList.add('body-pro-detail');
        this.getPro();
    }
    getPro=()=>{
        let {proId}=this.props.match.params;
        Axios.get(`/product/${proId}`)
        .then(product=>{
            this.setState({
                product: product.data.product[0]
            })
        })
    }
    componentWillUnmount(){
        document.body.classList.remove('body-pro-detail');
    }
    render() {
        let {product} =  this.state;
        return (
            <Container fluid>
                <Row className="pro-detail-container">
                    <Col xs={12} sm={3} md={4} lg={4}><img className="pro-detail-img" src={product.image}/></Col>
                    <Col className="pro-detail-box">
                        <div className="pro-detail-name">{product.name}</div>
                        <div className="pro-com">
                            <div>{(product.rating>0)?product.rating:"Chưa có đánh giá"}</div>
                            <div>Đã bán: <span>{product.sold}</span></div>
                        </div>
                        <div className="pro-detail-price">{product.price} $</div>
                        <div className="pro-detail-quantity">
                            <div className="quan-title">Số lượng</div>
                            <Quantity quantity={product.quantity}/>
                            <div className="quan-title">Còn {product.quantity}</div>
                        </div>
                        <div className="btn-pro">
                            <Button className="btn-action" variant="outline-danger" size="lg">Thêm vào giỏ hàng</Button>
                            <Button className="btn-action" variant="danger" size="lg">Mua ngay</Button>
                        </div>
                    </Col>
                </Row>
                {(product.catId!==undefined?<SameCat catId={product.catId}/>:"")}
            </Container>
        );
    }
}

export default ProDetail;