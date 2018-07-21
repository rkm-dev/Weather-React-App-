var React = require('react');

var About = (props) => {
	return(
		<div>
			<h1 className="text-center">About</h1>
			<p className="text-center">Weather App is Built upon React and integrated OpenWeatherMap API</p>
			<p>
				Here are some of the tools that have been used to built this app:
				<ul>
					<li>
						<a target="_blank" href="https://facebook.github.io/react">React</a> - is a Javascript framework introduced by facebook.
					</li>
					<li>
						<a target="_blank" href="https://openweathermap.org">Open Weather Map</a> - provides the api for access to real-time weather data.
					</li>
				</ul>
			</p>
		</div>
	);
};

module.exports = About;