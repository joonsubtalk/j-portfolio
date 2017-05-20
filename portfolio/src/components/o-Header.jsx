import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './o-Header.scss'; 
import './_grid.scss';

class Header extends Component {

	render() {
		return (
			<header className="o-header">
				<nav className="o-header__nav">
					<ul className="o-header__list flex-container">
						<li className="o-header__item"><Link to="/" className="o-header__link">Home</Link></li>
						<li className="o-header__item"><Link to="/about" className="o-header__link">About</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;