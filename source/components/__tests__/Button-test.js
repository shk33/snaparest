describe('Button component', function () {
  it('calls handler function on a click ',function(){
    var React     = require('react');
    var Button    = require('../Button.react.jsx');
    var TestUtils = require('react-addons-test-utils');
    var handleClick = jest.genMockFunction();

    var button = TestUtils.renderIntoDocument(
      <Button handleClick={handleClick} />
    );

    var buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

    TestUtils.Simulate.click(buttonInstance);

    expect(handleClick).toBeCalled();

    var numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

    expect(numberOfCallsMadeIntoMockFunction).toBe(1);

  });
});