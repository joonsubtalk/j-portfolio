import React from 'react';
import Module from './o-Module.jsx';

const Home = () => (
	<div>
		<Module />
		<section className="module">
			<div className="c-biography">
				<div className="">
					<p><span className="highlight">I love code and design.</span> I entered college as a fine arts major hoping to be an artist, but quickly realized my passions included programming.
					I remember one night coding way past 3am and amazed that the phone I was holding was able to display and move the character I had drawn.
					That ultimately led me to switch to Computer Science and start an adventure in front end web development.
					</p>
					<p>
					In 2014, I made the move up to the Bay Area and started my career as a front-end engineer. Two fast years went by as I worked with an amazing UI team at Zazzle.
					The experience left me with a greater interest in user interface and expanding my knowledge in web development.
					</p>
				</div>
			</div>
		</section>
	</div>
)

export default Home;