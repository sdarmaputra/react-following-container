import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sass from 'node-sass';
import path from 'path';
import followingContainer from '../../../src/libs/followingContainer.js';

export const prepareDocument = () => {
	const css = sass.renderSync({
		file: path.resolve(__dirname, '../../../src/libs/followingContainer.scss')
	}).css.toString();	
	const head = document.getElementsByTagName('head')[0];
	const style = document.createElement('style');
	style.setAttribute('type', 'text/css');
	style.appendChild(document.createTextNode(css));
	head.appendChild(style);
	document.body.innerHTML = '<div id="app" style="height: 2000px;"></div>';
}

export const mountComponent = (configs = {}) => {
	const WrappedComponent = (props) => (
		<div>
			<div>Wrapped component</div>
			<div>It should be wrapped</div>
		</div>
	);
	const FollowingComponent = followingContainer(WrappedComponent, configs);
	const wrapper = mount(<FollowingComponent />);
	ReactDOM.render(<FollowingComponent />, document.getElementById('app'));
	const element = document.getElementsByClassName('following-container')[0];
	const computedStyle = window.getComputedStyle(element);

	return {
		wrapper,
		WrappedComponent,
		computedStyle
	};
}

export const renderComponent = (configs = {}) => {
	prepareDocument();
	return mountComponent(configs);
}
