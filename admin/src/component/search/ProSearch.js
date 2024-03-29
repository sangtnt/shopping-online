import React, { Component } from 'react';
import axios from 'axios';
import ProTable from '../product/ProTable';
import {Container, Row} from 'react-bootstrap'
class ProSearch extends Component {
    constructor(props){
        super(props);
        this.state={
            products: []
        }
    }
    componentDidMount(){
        let params = new URLSearchParams(this.props.location.search);
        let proName = params.get('proName')
        axios.get(`/product/search?proName=${proName}`)
        .then(products=>{
            this.setState({
                products: products.data.product
            })
        })
    }
    render() {
        let {products} = this.state;
        if (products.length===0){
            return(
                <h1 style={{textAlign: "center", color: "red"}}>Không có sản phẩm bạn đang tìm kiếm</h1>
            )
        }
        return (
            <Container>
                <Row>
                    <ProTable products={products}/>
                </Row>
            </Container>
        );
    }
}

export default ProSearch;