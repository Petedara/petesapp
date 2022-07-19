import React from 'react';
import './category.css'


export default function Category(props) {
    return(
        <div className='niche'>
            <button>{props.name}</button>
        </div>
    )
}