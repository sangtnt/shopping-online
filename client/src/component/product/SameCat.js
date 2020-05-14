import React, { Component } from 'react';
import List from '../List';
import axios from 'axios';
import ProNewItem from './ProNewItem';
import {Row, Container} from 'react-bootstrap'

class SameCat extends Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        this.getPro();
    }
    getPro=()=>{
        axios.get(`/product/sameCat/${this.props.catId}`)
        .then(products=>{
            this.setState({
                products: [...products.data.product]
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
                <h3>Sản phẩm tương tự</h3>
                <Container fluid>
                    <Row className="pro-newitem-container">
                        <List items={products} render={(item)=><ProNewItem product={item}/>}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SameCat;