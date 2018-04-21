import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Proofer from "./components/proofer";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Sidebar />
					<Switch>
						<Route exact path="/" component={Proofer} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
