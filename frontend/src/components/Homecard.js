import React from 'react'
import './Homecard.css';

const Homecard = ({color, text, value}) => {
    return(
        <div className='homecard' style={{backgroundColor : color}}>
            <p>{text}</p>
            <h1>{value ? value : 0}</h1>
        </div>
        )
}


export default Homecard;