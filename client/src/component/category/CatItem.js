import React from 'react';
import {Col} from 'react-bootstrap';
function CatItem({item}){
    return(
        <Col>
            <img src={item.image}/>
            <p>{item.name}</p>
        </Col>
    )
}
export default CatItem;