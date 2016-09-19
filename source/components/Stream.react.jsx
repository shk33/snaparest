var React = require('react');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');
var TweetStore = require('../stores/TweetStore');

var Stream = React.createClass({
  getInitialState: function () {
    return {
      tweet: TweetStore.getTweet()
    }
  },
  componentDidMount: function () {
    TweetStore.addChangeListener(this.onTweetChange);
  },
  componentWillUnmount: function () {
    TweetStore.removeChangeListener(this.onTweetChange);
  },
  render: function () {
    var tweet = this.state.tweet;
    if (tweet) {
      return (
        <StreamTweet tweet={tweet} />
      );
    }
    return (
      <Header text="Waiting for public photos from Twitter..." />
      );
  },
  onTweetChange: function () {
    this.setState({
      tweet: TweetStore.getTweet()
    });
  },
});
module.exports = Stream;