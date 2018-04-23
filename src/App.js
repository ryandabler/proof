import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import Proofer from "./components/proofer";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import NewProjectForm from "./components/new-project-form";

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

App.propTypes = {
	loadData: PropTypes.func
};

const mapStateToProps = state => ({
	
});

const mapDispatchToProps = dispatch => ({
	loadData: (data) => {
		dispatch(loadProjects(data));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
