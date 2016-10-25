import React, { Component, PropTypes } from 'react';

const ContextType = {
  insertCss: PropTypes.func.isRequired,
};

class App extends Component {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context;
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default App;
