import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Something extends Component {
  render() {
    debugger; // this.props.timer is 3 but this doesn't render until the timer value is 4
    return <span>{this.props.timer}</span>;
  }
}

export default Something;