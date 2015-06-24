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
				<h2><a href={url}><strong>Digital Comic Shopper</strong></a></h2>
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
      <div className="col-1-3">
				<h2 id="learnersGuild"><a href={url}><strong>The Learners Guild</strong></a></h2>
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
      <div className="col-1-3">
        <h2 id="therapyFixx"><a href={url}><strong>TherapyFixx</strong></a></h2>
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
      <div className="col-1-3">
        <h2 id="quizRacer"><a href={url}><strong>Quiz Racer</strong></a></h2>
          <p> Response Time: {responseTime} ms</p>
          <p id={(statusCode === 200) ? 'okay' : 'fail'}>HTTP Status Code: {statusCode} </p>
      </div>
    );
  }
});

var BriskLyfe = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    socket.on('responseFive', this.setState.bind(this));
  },
  render: function() {
    var responseTime = this.state.responseTime || '-';
    var statusCode = this.state.statusCode || '-';
    var url = this.state.url || '-';
    return (
      <div className="col-1-3">
        <h2 id="briskLyfe"><a href={url}><strong>BRISK LYFE</strong></a></h2>
          <p> Response Time: {responseTime} ms</p>
          <p id={(statusCode === 200) ? 'okay' : 'fail'}>HTTP Status Code: {statusCode} </p>
      </div>
    );
  }
});

var JournalWithClarity = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    socket.on('responseSix', this.setState.bind(this));
  },
  render: function() {
    var responseTime = this.state.responseTime || '-';
    var statusCode = this.state.statusCode || '-';
    var url = this.state.url || '-';
    return (
      <div className="col-1-3">
        <h2 id="journalWithClarity"><a href={url}><strong>Journal With Clarity</strong></a></h2>
          <p> Response Time: {responseTime} ms</p>
          <p id={(statusCode === 200) ? 'okay' : 'fail'}>HTTP Status Code: {statusCode} </p>
      </div>
    );
  }
});

var RentalRater = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    socket.on('responseSeven', this.setState.bind(this));
  },
  render: function() {
    var responseTime = this.state.responseTime || '-';
    var statusCode = this.state.statusCode || '-';
    var url = this.state.url || '-';
    return (
      <div className="col-1-3">
        <h2 id="rentalRater"><a href={url}><strong>Rental Rater</strong></a></h2>
          <p> Response Time: {responseTime} ms</p>
          <p id={(statusCode === 200) ? 'okay' : 'fail'}>HTTP Status Code: {statusCode} </p>
      </div>
    );
  }
});

var WordsWithCharles = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    socket.on('responseEight', this.setState.bind(this));
  },
  render: function() {
    var responseTime = this.state.responseTime || '-';
    var statusCode = this.state.statusCode || '-';
    var url = this.state.url || '-';
    return (
      <div className="col-1-3">
        <h2 id="wordsWithCharles"><a href={url}><strong>Words With Charles</strong></a></h2>
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
      <BriskLyfe />
      <JournalWithClarity />
      <RentalRater />
      <WordsWithCharles />
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
