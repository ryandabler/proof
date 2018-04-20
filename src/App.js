import React, { Component } from 'react';

import Proofer from "./components/proofer";
import Sidebar from "./components/sidebar";

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Sidebar />
				<Proofer />
			</div>
		);
	}
}

export default App;
