import React from 'react';
import {Link} from 'react-router-dom';
function CatItem({item}){
    return(
        <div className="cat-item cat-border">
            <Link to={`/category/probycategory/${item.catId}`} className="link-none">
                <img src={item.catImage}/>
                <div>{item.catName}</div>
            </Link>
        </div>
    )
}
export default CatItem;