var React = require('react');

var ErrorModal = React.createClass({
	render: function() {
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal>
				<h4>Title</h4>
				<p>error message</p>
				<p>
					<button className="button" data-close>
						Close
					</button>
				</p>
			</div>
		);
	}
}); 

module.exports = ErrorModal;