import React from 'react';
import GoogleMapReact from 'google-map-react';

export default class Map extends React.Component {
	_onChildClick(key, childProps) {
		this.props.onLocationChange([childProps.lat, childProps.lng]);
	}

	_onBoundsChange(center) {
		this.props.onLocationChange(center);
	}

	render() {
		return (
			<GoogleMapReact
				apiKey="AIzaSyCifc2KUYVNfW101ql89cBRAmOmeP9zh3U"
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}
				onChildClick={this._onChildClick.bind(this)}
				onBoundsChange={this._onBoundsChange.bind(this)}
			>
			</GoogleMapReact>
		);
	}
}
