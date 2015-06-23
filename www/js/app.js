var socket = io.connect();

var ComicNinja = React.createClass({
  getInitialState: function() {
    return {perMinute: '-', perDay: '-'};
  },
  componentDidMount: function() {
    socket.on('response', this.setState.bind(this));
  },
  render: function() {
    var responseTime = this.state.responseTime || '-';
		var statusCode = this.state.statusCode || '-';
		var url = this.state.url || '-';
    return (
      <div>
				<h2><strong>{url}</strong></h2>
					<p> Response Time: {responseTime} ms</p>
					<p className="okay"> {statusCode} </p>
			</div>
    );
  }
});

var Reddit = React.createClass({
  getInitialState: function() {
    return {perMinute: '-', perDay: '-'};
  },
  componentDidMount: function() {
    socket.on('responseReddit', this.setState.bind(this));
  },
  render: function() {
    var responseTime = this.state.responseTime || '-';
		var statusCode = this.state.statusCode || '-';
		var url = this.state.url || '-';
    return (
      <div>
				<h2><strong>{url}</strong></h2>
					<p> Response Time: {responseTime} ms</p>
					<p className="okay"> {statusCode} </p>
			</div>
    );
  }
});
var MyComponent = React.createClass({
	render: function() {
		return (
		<div>
			<ComicNinja />
			<Reddit />
		</div>
		)
	}
});

React.render(
	<MyComponent />,
	document.getElementById('main')
)

// function renderOrUpdateResponse(data) {
// 	React.render(
// 		<ResponseTime data={data} />,
// 		document.getElementById('main')
// 	)
	
// }
