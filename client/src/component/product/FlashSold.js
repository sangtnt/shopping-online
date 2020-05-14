import React, { Component } from 'react';
import List from '../List';
import axios from 'axios';
import ProNewItem from './ProNewItem';
import {Row, Container} from 'react-bootstrap';
class FlashSold extends Component {
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
        axios.get('/product/flashPro')
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
                <h3>Sản phẩm bán chạy</h3>
                <Container fluid>
                    <Row className="pro-newitem-container">
                        <List items={products} render={(item)=><ProNewItem product={item}/>}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FlashSold;