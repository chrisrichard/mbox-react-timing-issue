import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer(['appState'])
export default class Condition extends Component {
	render() {
		return this.props.appState.timer > 3 ?
			//React.cloneElement(this.props.children) :
			this.props.children :
			<span>Nothing</span>;
	}
}