import React, { Component } from 'react';
import CatItem from './CatItem';
import cat from '../../category.json';
import List from '../List';
import {Row, Col} from 'react-bootstrap'
class Category extends Component {
    render() {
        let category=[];
        if (window.screen.width>600){
            category=cat.slice(0,10)
        }
        else{
            category=cat.slice(0,4)
        }
        return (
            <Row className="category-container">
                <Col md={12}><h2>Danh mục</h2></Col>
                <List items={category} render={(item)=><CatItem item={item}/>}/>
                <Col md={12}></Col>
            </Row>
        );
    }
}

export default Category;