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
                    let date = new Date(item.proDate);
                    return(
                        <tr>
                            <td>{item.proName}</td>
                            <td>{item.proPrice}</td>
                            <td>{item.proDescription}</td>
                            <td>{item.proQuantity}</td>
                            <td>{date.toString()}</td>
                            <td>{item.proSold}</td>
                            <td>{item.proRating}</td>
                            <td>{item.proCatId}</td>
                        </tr>
                    )
                }}/>
            </tbody>
        </Table>
    )
}

export default ProTable;