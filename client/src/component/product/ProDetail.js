import React, { Component } from 'react';
import Axios from 'axios';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Quantity from './Quantity';
import SameCat from './SameCat';
class ProDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            product:{},
            pathname:""
        }
    }
    componentDidMount(){
        document.body.classList.add('body-pro-detail');
        this.getPro();
    }
    componentDidUpdate(){
        this.getPro();
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.pathname, " ", nextProps.location.pathname);
        // console.log(this.state.proId," ",nextState.proId)
        if (this.state.pathname===nextProps.location.pathname){
            return false;
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        return true;
    }
    getPro=()=>{
        let {proId}=this.props.match.params;
        Axios.get(`/product/${proId}`)
        .then(product=>{
            this.setState({
                product: product.data.product[0],
                pathname: this.props.location.pathname
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
                    <Col xs={12} sm={3} md={4} lg={4}><img className="pro-detail-img" src={product.pro_image}/></Col>
                    <Col className="pro-detail-box">
                        <div className="pro-detail-name">{product.pro_name}</div>
                        <div className="pro-com">
                            <div>{(product.pro_rating>0)?product.pro_rating:"Chưa có đánh giá"}</div>
                            <div>Đã bán: <span>{product.pro_sold}</span></div>
                        </div>
                        <div className="pro-detail-price">{product.pro_price} $</div>
                        <div className="pro-detail-quantity">
                            <div className="quan-title">Số lượng</div>
                            <Quantity quantity={product.pro_quantity}/>
                            <div className="quan-title">Còn {product.pro_quantity}</div>
                        </div>
                        <div className="btn-pro">
                            <Button className="btn-action" variant="outline-danger" size="lg">Thêm vào giỏ hàng</Button>
                            <Button className="btn-action" variant="danger" size="lg">Mua ngay</Button>
                        </div>
                    </Col>
                </Row>
                {(product.cat_id!==undefined?<SameCat catId={product.cat_id}/>:"")}
            </Container>
        );
    }
}

export default ProDetail;