var UptimeStatistics = React.createClass({
	render: function() {
		return (
			<div className="responseTime">
				Response Time Is: 3.2 <br></br>
				Status Code Is: 404
			</div>
		);
	}
});

React.render(
	<UptimeStatistics />,
	document.getElementById('main')
);
