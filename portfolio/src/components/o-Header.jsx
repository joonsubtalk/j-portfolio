import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './o-Header.scss';

class Header extends Component {

	render() {
		return (
			<header className="o-header">
				<nav className="o-header-nav">
					<ul className="o-header-list">
						<li className="navItem"><Link to="/">Home</Link></li>
						<li className="navItem"><Link to="/about">About</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;