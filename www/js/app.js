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
				<h2 className="componentTitle"><strong>Digital Comic Shopper</strong></h2>
					<p> Response Time: {responseTime} ms</p>
					<p id={(statusCode === 200) ? 'okay' : 'fail'}>HTTP Status Code: {statusCode} </p>
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
				<h2 id="learnersGuild"><strong>The Learners Guild</strong></h2>
					<p> Response Time: {responseTime} ms</p>
					<p id={(statusCode === 200) ? 'okay' : 'fail'}> HTTP Status Code:{statusCode} </p>
			</div>
    );
  }
});

var TherapyFixx = React.createClass({
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
      <div>
        <h2 className="componentTitle" id="therapyFixx"><strong>TherapyFixx</strong></h2>
          <p> Response Time: {responseTime} ms</p>
          <p id={(statusCode === 200) ? 'okay' : 'fail'}>HTTP Status Code: {statusCode} </p>
      </div>
    );
  }
});

var QuizRacer = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    socket.on('responseFour', this.setState.bind(this));
  },
  render: function() {
    var responseTime = this.state.responseTime || '-';
    var statusCode = this.state.statusCode || '-';
    var url = this.state.url || '-';
    return (
      <div>
        <h2 className="componentTitle" id="quizRacer"><strong>Quiz Racer</strong></h2>
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
		  <LearnersGuild />
      <TherapyFixx />
      <QuizRacer />
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
