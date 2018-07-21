var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return(
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Delhi'>Delhi, IN</Link>
				</li>
				<li>
					<Link to='/?location=Rio'>Rio, Brazil</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;