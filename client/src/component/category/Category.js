import React, { Component } from 'react';
import CatItem from './CatItem';
import List from '../List';
import {Row} from 'react-bootstrap';
import axios from 'axios';
class Category extends Component {
    constructor(props){
        super(props);
        this.state={
            category:[]
        }
    }
    componentDidMount(){
        this.getCate();
    }
    getCate(){
        axios.get('/category')
        .then(category=>{
            this.setState({
                category:category.data.category
            })
        })
    }
    render() {
        let {category} = this.state;
        return (
            <div className="category">
                <h3>Danh mục</h3>
                <div className="category-container">
                    <List items={category} render={(item)=><CatItem item={item}/>}/>
                </div>
            </div>
        );
    }
}

export default Category;