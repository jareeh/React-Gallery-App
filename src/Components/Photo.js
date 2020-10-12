import React from 'react';
import '../index.css';

const Photo = (props) => {
    
    const url = `https://live.staticflickr.com/${props.data.server}/${props.data.id}_${props.data.secret}.jpg`;

    return(
        <div className="photo-container">
            <li className="photo">
                <img src={url} alt="" /> 
            </li>
        </div>
    );
};

export default Photo;