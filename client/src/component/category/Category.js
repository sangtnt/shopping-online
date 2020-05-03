import React, { Component } from 'react';
import CatItem from './CatItem';
import cat from '../../category.json';
import List from '../List';
import {Row, Col} from 'react-bootstrap';
import Pagina from '../pagination/Pagina';
import axios from 'axios';
class Category extends Component {
    constructor(props){
        super(props);
        this.state={
            category:[],
            catPage:0
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        let nextPage=new URLSearchParams(nextProps.location.search);
        if (parseInt(this.state.catPage)===parseInt(nextPage.get('catPage'))){
            return false;
        }
        return true;
    }
    componentDidUpdate(){
        this.getCate();
    }
    componentDidMount(){
        this.getCate();
    }
    getCate(){
        let {location} = this.props;
        let params = new URLSearchParams(location.search);
        let catPage=params.get('catPage');
        if (catPage===null){
            catPage=1;
        }
        let numItems=0;
        if(window.screen.width>600){
            numItems=10;
        }
        else{
            numItems=4;
        }
        axios.get('/category')
        .then(category=>{
            let cat= category.data.category; 
            let catNumPages=Math.ceil(cat.length/numItems);
            if (catPage>catNumPages){
                catPage=catNumPages
            }
            let start=(catPage-1)*numItems;
            let end=start+numItems;
            if (end>cat.length){
                end=cat.length;
            }
            this.setState({
                category:cat.slice(start,end),
                catPage: catPage,
                catNumPages: catNumPages
            })
        })
    }
    render() {
        let {category, catPage, catNumPages} = this.state;
        return (
            <div className="category-block">
                <Row className="category-container">
                    <Col md={12}><h2>Danh mục</h2></Col>
                    <List items={category} render={(item)=><CatItem item={item}/>}/>
                </Row>
                <Pagina active={catPage} pages={catNumPages}/>
            </div>
        );
    }
}

export default Category;