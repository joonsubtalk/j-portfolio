import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/o-Header';
import Footer from './components/o-Footer';
import About from './About.jsx';

class App extends Component {

	render() {
		return (
			<Router>
				<div>
					<Header />

					<Route exact path="/" component={Home}/>
					<Route exact path="/about" component={About}/>

					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;