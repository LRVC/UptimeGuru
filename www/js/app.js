// var socket = io.connect();
// socket.on('response', renderOrUpdateResponse);
// socket.on('responseTwo', renderOrUpdateResponse);

// var ResponseTime = React.createClass({
// 	render: function() {
// 			var responseTime = this.props.data.responseTime || '-';
// 			var statusCode = this.props.data.statusCode || '-';
// 			var url = this.props.data.url || '-';
// 			return (
// 				<div>
// 				<h2><strong>{url}</strong></h2>
// 					<p> Response Time: {responseTime} ms</p>
// 					<p className="okay"> {statusCode} </p>
// 				</div>
// 			)	
// 		}
// });

var socket = io.connect();

var MyComponent = React.createClass({
	render: function() {
		<ComicNinja />
	}
});

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
