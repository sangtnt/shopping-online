import React, { Component } from 'react';
import axios from 'axios';
import List from '../List';
import ProductBox from '../product/ProductBox';
import {Container, Row } from 'react-bootstrap';
class ProByCat extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        this.getProByCatId();
    }
    getProByCatId = ()=>{
        let {catId} = this.props.match.params;
        axios.get(`/category/probycategory/${catId}`)
        .then(products=>{
            this.setState({
                products: products.data.products
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        let {products} = this.state;
        console.log(products);
        return (
            <Container>
                <Row>
                    <List items={products} render={(item)=> <ProductBox product={item}/>}/>
                </Row>
            </Container>
        );
    }
}

export default ProByCat;