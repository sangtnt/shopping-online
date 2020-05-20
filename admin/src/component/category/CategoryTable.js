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
                </tr>
            </thead>
            <tbody>
                <List items={cat} render={(item)=>{
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    )
                }}/>
            </tbody>
        </Table>
    )
}

export default CategoryTable;