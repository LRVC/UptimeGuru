var socket = io.connect('https://localhost:3000');
socket.on('response', renderOrUpdateResponse);

var ResponseTime = React.createClass({
	render: function() {
			var responseTime = this.props.data.responseTime || '-';
			var statusCode = this.props.data.statusCode || '-';
			var url = this.props.data.url || '-';
			return (
				<div>
				<h2><strong>{url}</strong></h2>
					<p> Response Time: {responseTime} ms</p>
					<p className="okay"> {statusCode} </p>
				</div>
			)	
		}
});

function renderOrUpdateResponse(data) {
	React.render(
		<ResponseTime data={data} />,
		document.getElementById('main')
	)
	
}

