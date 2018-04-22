import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Proofer from "./components/proofer";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import NewProjectForm from "./components/new-project-form";

import './App.css';

class App extends Component {
	constructor(props) {
		super();
		this.props = props;
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Sidebar />
					<Switch>
						<Route exact path="/" component={Proofer} />
						<Route exact path="/new" component={NewProjectForm} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
