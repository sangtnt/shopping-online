import React from 'react';
import {Table} from 'react-bootstrap';
import List from '../List';
function CategoryTable({ cat }) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Ảnh</th>
                </tr>
            </thead>
            <tbody>
                <List items={cat} render={(item)=>{
                    return(
                        <tr>
                            <td>{item.cat_id}</td>
                            <td>{item.cat_name}</td>
                            <td><img src={item.cat_image}/></td>
                        </tr>
                    )
                }}/>
            </tbody>
        </Table>
    )
}

export default CategoryTable;