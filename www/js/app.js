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
      <div className="col-1-3">
        <h3 className="content-subhead">
            <i className="fa fa-rocket"><a href={url}><strong>Digital Comic Shopper</strong></a></i>
        </h3>
        <p> Response Time: {responseTime} ms</p>
        <p id={(statusCode === 200) ? 'okay' : 'fail'}>HTTP Status Code: {statusCode} </p>
      </div>
    );
  }
});

var Reddit = React.createClass({
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
      <div className="col-1-3">
        <h3 className="content-subhead">
            <i className="fa fa-rocket"><a href={url}><strong>Reddit</strong></a></i>
        </h3>
        <p> Response Time: {responseTime} ms</p>
        <p id={(statusCode === 200) ? 'okay' : 'fail'}>HTTP Status Code: {statusCode} </p>
      </div>
    );
  }
});

var Google = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    socket.on('responseThree', this.setState.bind(this));
  },
  render: function() {
    var responseTime = this.state.responseTime || '-';
    var statusCode = this.state.statusCode || '-';
    var url = this.state.url || '-';
    return (
      <div className="col-1-3">
        <h3 className="content-subhead">
            <i className="fa fa-rocket"><a href={url}><strong>Google</strong></a></i>
        </h3>
        <p> Response Time: {responseTime} ms</p>
        <p id={(statusCode === 200) ? 'okay' : 'fail'}>HTTP Status Code: {statusCode} </p>
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
      <Google />
		</div>
		)
	}
});

React.render(
	<MyComponent />,
	document.getElementById('main')
)
