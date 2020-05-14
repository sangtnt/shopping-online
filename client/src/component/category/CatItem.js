import React from 'react';
function CatItem({item}){
    return(
        <div className="cat-item cat-border">
            <img src={item.image}/>
            <div>{item.name}</div>
        </div>
    )
}
export default CatItem;