import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Nav from './nav';
import Home from './home';
import Profile from './profile';
import CelebrityJokes from './celebrityjokes';
import FoodJokes from './foodjokes';
import Callback from './callback';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Nav />
				<Router onChange={this.handleRoute}>
					<FoodJokes path="/" />
					<FoodJokes path="/foodjokes" />
        	<CelebrityJokes path="/special" />
        	<Callback path="/callback" />
				</Router>
			</div>
		);
	}
}
