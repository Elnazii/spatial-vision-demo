import React from 'react';
import Map from './map';

export default class editProfile extends React.Component{

	// Default location of map when page gets loaded
	DEFAULT_LOCATION = [-37.8151105,144.9624782];

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		const profileData = localStorage.getItem('profile');
		if (profileData) {
			const user = JSON.parse(profileData);
			const location = user.location;
			this.fillForm(user);
			this.mapLocationChanged(location);
		} else {
			this.mapLocationChanged(this.DEFAULT_LOCATION);
		}
	}

	fillForm(user){
		this.refs.firstName.value = user.firstName;
		this.refs.lastName.value = user.lastName;
		this.refs.email.value = user.email;
		this.refs.birthDate.value = user.birthDate;
	}

	mapLocationChanged(latLng) {
		this.setState({
			location: latLng
		});
	}

	saveForm(e){
		e.preventDefault();

		const formData = {
			firstName: this.refs.firstName.value,
			lastName: this.refs.lastName.value,
			email: this.refs.email.value,
			birthDate: this.refs.birthDate.value,
			location: this.state.location
		};

		localStorage.setItem('profile', JSON.stringify(formData));

		this.setState({
			success : true
		});
	}


	render(){
		// Size of map canvas
		const mapStyle = {
			width: '100%',
			height: '400px'
		};

		return(
			<div>
				<h1>Spatial Vision Scenario</h1>
				<p>
					The values of the following form will be stored in the <strong>localStorage</strong>.
				</p>
				<div className="wrapper container">
					<form onSubmit={this.saveForm.bind(this)}>
						<div className="form-group">
							<label htmlFor="firstName">First Name:</label>
							<input type="text" className="form-control" name="firstName" ref="firstName" required/>
						</div>
						<div className="form-group">
							<label htmlFor="lastName">Last Name:</label>
							<input type="text" className="form-control" name="lastName" ref="lastName" required/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email Address:</label>
							<input type="email" className="form-control" name="email" ref="email" required/>
						</div>
						<div className="form-group">
							<label htmlFor="birthDate">Date of Birth:</label>
							<input type="date" className="form-control" name="birthDate" ref="birthDate" required/>
						</div>
						<div className="form-group">
							<label>Location:</label>
							<div style={mapStyle}>
								<Map zoom={15} center={this.state.location} onLocationChange={this.mapLocationChanged.bind(this)} />
							</div>
						</div>
						{ this.state.success &&
						<div className="alert alert-success" role="alert">
							Your profile has been successfully saved!
						</div>
						}
						<div className="form-group">
							<button type="submit" className="btn btn-primary">Save profile</button>
						</div>
					</form>
				</div>
			</div>
		)
	}


}
