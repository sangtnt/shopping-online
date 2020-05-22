import React, { Component } from 'react';
import ProTable from './ProTable';
import {Container} from 'react-bootstrap';
import Pagina from '../pagination/Pagina';
import axios from 'axios';
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            numrows: 10,
            pages: 0,
            page: 0
        }
    }
    componentDidMount() {
        this.getPro();
    }
    shouldComponentUpdate(nextProps, nextState){
        let nextPage= new URLSearchParams(nextProps.location.search).get('page');
        let page = this.state.page;
        if(nextPage!==page){
            return true;
        }
        return false;
    }
    componentDidUpdate(){
        this.getPro();
    }
    getStart = (page) => {
        return (page-1)*this.state.numrows;
    }
    getEnd = (start, max) =>{
        let end = start+this.state.numrows;
        return (end<=max ? end : max);
    }
    getPro = () => {
        let params = new URLSearchParams(this.props.location.search);
        let page = params.get('page');
        let orderby = params.get('orderby');
        let order = params.get('order');
        if(page===null || orderby===null ||order===null){
            if (page ===null){
                page = 1;
            }
            if (orderby ===null){
                orderby = "proName";
            }
            if (order ===null){
                order = "asc";
            }
            this.props.history.push(`/products?page=${page}&orderby=${orderby}&order=${order}`);
        }
        axios.get(`/product?orderby=${orderby}&order=${order}`)
        .then(product=>{
            let pros = product.data.product;
            let pages = Math.ceil(pros.length / this.state.numrows);
            if (page>pages){
                page=pages;
            }
            let start = this.getStart(page);
            let end = this.getEnd(start, pros.length);
            this.setState({
                page: page,
                products: pros.slice(start, end),
                pages: pages
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        let {products, pages, page} = this.state;
        return (
            <Container>
                <ProTable products={products}/>
                <Pagina active={page} pages={pages} location={this.props.location}/>
            </Container>
        );
    }
}

export default Products;