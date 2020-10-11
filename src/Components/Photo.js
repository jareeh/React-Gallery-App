import React from 'react';
import '../index.css';

const Photo = () => {
    
    const url = '';

    return(
        <div className="photo-container">
            <li className="photo">
                <img src={url}alt="" />
            </li>
        </div>
    );
};

export default Photo;