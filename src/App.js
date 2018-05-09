import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import Proofer from "./components/proofer";
import Menu from "./components/menu";
import Header from "./components/header";
import NewProjectForm from "./components/new-project-form";
import LandingPage from "./components/landing-page";
import ProjectOverview from "./components/project-overview";

import { getAllFromDB } from "./indexeddb";
import { loadProjects } from "./actions";

import './App.css';

class App extends Component {
	constructor(props) {
		super();
		this.props = props;
	}

	componentDidMount() {
		getAllFromDB("projects", this.props.loadData);
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Menu />
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/new" component={NewProjectForm} />
						<Route exact path="/projects/:id" component={ProjectOverview} />
						<Route exact path="/projects/:id/:page" component={Proofer} />
					</Switch>
				</div>
			</Router>
		);
	}
}

App.propTypes = {
	loadData: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
	loadData: (data) => {
		dispatch(loadProjects(data));
	}
});

export default connect(null, mapDispatchToProps)(App);
