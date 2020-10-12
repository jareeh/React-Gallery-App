import React, { Component } from 'react';
import Photo from './Photo';

class PhotoList extends Component{

    render(){
        let photos = this.props.data.map((photo, index) => <li><Photo data={this.props.data[index]}/></li>)
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <p>Here is where the photo grid will go.</p>
                <ul>
                    {photos}
                </ul>
            </div>
        )
    }
}

export default PhotoList;