import editProfileStorage from './components/profile/edit-storage';
import editProfileServer from './components/profile/edit-server';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';
import '../styles/index.scss';
import NavBar from './components/header/nav';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<NavBar />

					<div className="container">
						<Switch>
							<Redirect exact={true} from="/" to="/profile/edit/storage" />

							<Route path="/profile/edit/storage" component={ editProfileStorage }/>
							<Route path="/profile/edit/server" component={ editProfileServer }/>
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}
