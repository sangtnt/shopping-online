import React from 'react';
import {Link} from 'react-router-dom';
function CatItem({item}){
    return(
        <div className="cat-item cat-border">
            <Link to={`/category/probycategory/${item.cat_id}`} className="link-none">
                <img src={item.cat_image}/>
                <div>{item.cat_name}</div>
            </Link>
        </div>
    )
}
export default CatItem;