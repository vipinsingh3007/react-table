var logMixin = {
  _log: function(methodName, args) {
    console.log(this.name + " :: ", methodName, args);
  },
  getDefaultProps: function() {
    console.log("getDefaultProps", arguments);
    return {
      text: ""
    };
  },
  getInitialState: function() {
    this._log("getInitialState", arguments);
    return {
      text: this.props.defaultValue
    };
  },
  componentWillUpdate: function(nextProps, nextState) {
    this._log("componentWillUpdate", arguments);
  },
  componentDidUpdate: function(oldProps, oldState) {
    // if (this.state.text.length > 3) {
    //   this.replaceState(oldState);
    // }
    this._log("componentDidUpdate", arguments);
  },
  componentWillMount: function() {
    this._log("componentWillMount", arguments);
    this.setState({ text: "ham" });
  },
  componentDidMount: function() {
    this._log("componentDidMount", arguments);
  },
  componentWillUnmount: function() {
    this._log("componentWillUnmount", arguments);
  },
  componentWillReceiveProps: function(newProps) {
    this._log("componentWillReceiveProps", newProps);
    this.setState({
      text: newProps.defaultValue
    });
  },
  shouldComponentUpdate(newProps, newState) {
    this._log("shouldComponentUpdate", arguments);
    return 1;
  }
};
