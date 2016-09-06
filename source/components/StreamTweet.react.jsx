var React    = require('react');
var ReactDOM = require('react-dom');
var Header   = require('./Header.react.jsx');
var Tweet    = require('./Tweet.react.jsx');

var StreamTweet = React.createClass({
  getInitialState() {
    console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    };
  },

  componentWillMount() {
    console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');

    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  },

  render(){
    console.log('[Snapterest] StreamTweet: Running render()');

    return (
      <section>
      <Header text={this.state.headerText} />
      <Tweet 
      tweet={this.props.tweet}
      onImageClick={this.props.onAddTweetToCollection}
      />
      </section>
      );
  },

  componentDidMount() {
    console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

    var componentDOMRepresentation = ReactDOM.findDOMNode(this);

    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHtml  = componentDOMRepresentation.children[1].outerHTML;
  },

  componentWillReceiveProps: function (nextProps) {
    console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');

    var currentTweetLength = this.props.tweet.text.length;
    var nextTweetLength = nextProps.tweet.text.length;
    var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    var headerText;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    });

    if (isNumberOfCharactersIncreasing) {
      headerText = 'Number of characters is increasing';
    } else {
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({
      headerText: headerText
    });

    window.snapterest.numberOfReceivedTweets++;
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()');
    return (nextProps.tweet.text.length > 1);
  },

  componentWillUpdate: function (nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
  },

  componentDidUpdate: function (prevProps, prevState) {
    console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');
    window.snapterest.numberOfDisplayedTweets++;
  },

  componentWillUnmount() {
    console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');
    
    delete window.snapterest;
  },
});

module.exports = StreamTweet;