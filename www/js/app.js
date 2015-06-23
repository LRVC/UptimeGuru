var socket = io.connect();

var ComicNinja = React.createClass({
  getInitialState: function() {
    return {};
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
				<h2><strong>Digital Comic Shopper</strong></h2>
					<p> Response Time: {responseTime} ms</p>
					<p id={(statusCode === 200) ? 'okay' : 'fail'}> {statusCode} </p>
			</div>
    );
  }
});

var LearnersGuild = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    socket.on('responseTwo', this.setState.bind(this));
  },
  render: function() {
    var responseTime = this.state.responseTime || '-';
		var statusCode = this.state.statusCode || '-';
		var url = this.state.url || '-';
    return (
      <div>
				<h2><strong>The Learners Guild</strong></h2>
					<p> Response Time: {responseTime} ms</p>
					<p id={(statusCode === 200) ? 'okay' : 'fail'}> {statusCode} </p>
			</div>
    );
  }
});
var MyComponent = React.createClass({
	render: function() {
		return (
		<div>
			<ComicNinja />
			<LearnersGuild />
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
