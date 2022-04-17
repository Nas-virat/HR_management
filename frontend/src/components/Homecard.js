import React from 'react'
import './Homecard.css';

const Homecard = ({color, text}) => {
    return(
        <div className='homecard' style={{backgroundColor : color}}>
            <p>{text}</p>
        </div>
        )
}


export default Homecard;