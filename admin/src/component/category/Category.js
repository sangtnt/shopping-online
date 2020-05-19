import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import CategoryTable from './CategoryTable';
import Pagina from '../pagination/Pagina';
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: []
        }
    }
    componentDidMount() {
        this.getCategory();
    }
    getCategory = () => {
        axios.get('/category')
        .then(category=>{
            this.setState({
                category: category.data.category.slice(0,10)
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        let {category} = this.state;
        return (
            <Container>
                <CategoryTable cat={category}/>
                <Pagina active={1} pages={10}/>
            </Container>
        );
    }
}

export default Category;