var React = require('react');
var ReactDOM = require('react-dom');
var ReactClass = React.createClass({
  getInitialState() {
      return {
         isHeaderHidden: false
      };
  },
  handleClick() {
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
  },
  render() {
    var title = 'React Stateful component'
    var headerElement = React.createElement('h1', {className: 'header', key: 'header'}, 
      title);

    var buttonElement = React.createElement('button', 
        {className: 'btn btn-default', onClick: this.handleClick, key: 'button'}, 
        'Toggle Header');

    if (this.state.isHeaderHidden) return React.createElement('div', null, [buttonElement]);

    return React.createElement('div', null, [buttonElement, headerElement]);
  }
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, 
    document.getElementById('react-application'));