import React from "react";

function HomepageItem ({item}) {
return(

<div className="Homepage.item">
    <div></div>
    <img className="Hompage-img" src={item.icon.default}/>
    <div className="Homepage-item-text">{item.description}</div>
</div>

);
}


export default HomepageItem;