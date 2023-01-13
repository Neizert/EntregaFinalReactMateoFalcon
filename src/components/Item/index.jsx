import './item.css';
import React from 'react';


const Item = ({info}) => {
    return (
        <a href='' className='film'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </a>
    )
}

export default Item;