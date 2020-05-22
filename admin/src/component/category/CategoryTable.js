import React from 'react';
import {Table} from 'react-bootstrap';
import List from '../List';
import { Link, Route} from 'react-router-dom';
import CategoryModel from './CategoryModel';
function CategoryTable({ cat }) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên</th>
                </tr>
            </thead>
            <tbody>
                <List items={cat} render={(item)=>{
                    return(
                        <tr>
                            <td>{item.catId}</td>
                            <td><Link to={`/category/${item.catId}`}>{item.catName}</Link></td>
                        </tr>
                    )
                }}/>
            </tbody>
            <Route path="/category/:catId" component={CategoryModel}/>
        </Table>
    )
}

export default CategoryTable;