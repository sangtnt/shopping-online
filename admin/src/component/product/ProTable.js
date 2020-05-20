import React from 'react';
import {Table} from 'react-bootstrap';
import List from '../List';
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
                    let date = new Date(item.date);
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{date.toString()}</td>
                            <td>{item.sold}</td>
                            <td>{item.rating}</td>
                            <td>{item.catId}</td>
                        </tr>
                    )
                }}/>
            </tbody>
        </Table>
    )
}

export default ProTable;