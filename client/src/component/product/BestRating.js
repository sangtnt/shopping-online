import React, { Component } from 'react';
import List from '../List';
import axios from 'axios';
import ProductBox from './ProductBox';
import {Row, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class BestRating extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        this.getPro();
    }
    getPro=()=>{
        axios.get('/product/bestRating')
        .then(products=>{
            this.setState({
                products: products.data.product
            })
        })
        .catch(err=>{
            console.log(err);
        });
    }
    render() {
        let {products} = this.state;
        return (
            <div className="new-pro-container">
                <h3>Sản phẩm đánh giá cao</h3>
                <Container fluid>
                    <Row className="pro-newitem-container">
                        <List items={products} render={(item)=><ProductBox product={item}/>}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BestRating;