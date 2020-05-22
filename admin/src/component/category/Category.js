import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import CategoryTable from './CategoryTable';
import Pagina from '../pagination/Pagina';
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            numrows: 10,
            pages: 0,
            page: 0
        }
    }
    componentDidMount() {
        this.getCategory();
    }
    shouldComponentUpdate(nextProps, nextState){
        let nextPage= new URLSearchParams(nextProps.location.search).get('page');
        if (nextPage===null){
            nextPage=1;
        }
        let nextPathname= nextProps.location.pathname;
        let {pathname}= this.props.location;
        let {page} = this.state;
        if(nextPage===page){
            return false;
        }
        return true;
    }
    componentDidUpdate(){
        this.getCategory();
    }
    getStart = (page) => {
        return (page-1)*this.state.numrows;
    }
    getEnd = (start, max) =>{
        let end = start+this.state.numrows;
        return (end<=max ? end : max);
    }
    getCategory = () => {
        let params = new URLSearchParams(this.props.location.search);
        let page = params.get('page');
        if (page!== null){
            let splitIndex= page.search('/');
            if (splitIndex>0)
                page = page.slice(0,splitIndex)
        }
        if (page ===null){
            page = 1;
        }
        axios.get('/category')
        .then(category=>{
            let cat = category.data.category;
            let pages = Math.ceil(cat.length / this.state.numrows);
            if (page>pages){
                page=pages;
            }
            let start = this.getStart(page);
            let end = this.getEnd(start, cat.length);
            this.setState({
                page: page,
                category: cat.slice(start, end),
                pages: pages
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        let {category, pages, page} = this.state;
        return (
            <Container>
                <CategoryTable cat={category}/>
                <Pagina active={page} pages={pages} location={this.props.location}/>
            </Container>
        );
    }
}

export default Category;