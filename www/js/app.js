var data = [
  { label: 'Layer 1', values: [ {x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2} ] },
  { label: 'Layer 2', values: [ {x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 4} ] }
];


var socket = io.connect('http://localhost:3000');
socket.on('response', renderOrUpdateResponse);

var d3Chart = React.createClass({
	render: function() {
		return (
			<svg width=100 height=100></svg>

		)
	}
});

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


