import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoList extends Component {
	render() {
		const results = this.props.data;
		let photos;

		if (results.length) {
			photos = results.map((photo, index) => (
				<Photo data={results[index]} key={index} />
			));
		} else {
			photos = <NotFound />;
		}

		return (
			<div className="photo-container">
				<h2>Results</h2>
				<ul>{photos}</ul>
			</div>
		);
	}
}

export default PhotoList;
