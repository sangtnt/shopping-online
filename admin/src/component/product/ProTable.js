import React from 'react';
import {Table} from 'react-bootstrap';
import List from '../List';
import {Link, Route} from 'react-router-dom';
import ProductModel from './ProductModel'
function ProTable({ products }) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Mô tả</th>
                    <th>Số lượng</th>
                    <th>Ngày nhập</th>
                    <th>Đã bán</th>
                    <th>Đánh giá</th>
                    <th>Danh mục</th>
                </tr>
            </thead>
            <tbody>
                <List items={products} render={(item)=>{
                    let date = new Date(item.pro_date);
                    return(
                        <tr>
                            <td><Link to={`/products/${item.pro_id}`}>{item.pro_name}</Link></td>
                            <td>{item.pro_price}</td>
                            <td>{item.pro_description}</td>
                            <td>{item.pro_quantity}</td>
                            <td>{date.toString()}</td>
                            <td>{item.pro_sold}</td>
                            <td>{item.pro_rating}</td>
                            <td>{item.cat_id}</td>
                        </tr>
                    )
                }}/>
            </tbody>
            <Route path="/products/:proId" component={ProductModel}/>
        </Table>
    )
}

export default ProTable;