import React from 'react';
import {Link} from 'react-router-dom';
function CatItem({item}){
    return(
        <div className="cat-item cat-border">
            <Link to={`/category/probycategory/${item.id}`} className="link-none">
                <img src={item.image}/>
                <div>{item.name}</div>
            </Link>
        </div>
    )
}
export default CatItem;