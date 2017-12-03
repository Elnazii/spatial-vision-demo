import React from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default class NavBar extends React.Component {

	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#"><img height="30" src="http://spatialvision.com.au/images/interface/Spatial-Vision-Logo.png" /></a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem><Link to='/profile/edit/storage'>With localStorage</Link></NavItem>
					<NavItem><Link to='/profile/edit/server'>With mockServer</Link></NavItem>
				</Nav>
			</Navbar>
		);
	}

}
