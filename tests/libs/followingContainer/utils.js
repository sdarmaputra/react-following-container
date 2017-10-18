import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import followingContainer from '../../../src/libs/followingContainer.js';

var containers = [];
document.body.setAttribute('style', 'height: 3000px;');

export const prepareDocument = () => {
	const mainElement = document.createElement('div');
	const elementId = `app${containers.length}`;
	containers.push(elementId);
	mainElement.setAttribute('id', elementId);
	document.body.appendChild(mainElement);
	return elementId;
}

export const mountComponent = (configs = {}, containerId) => {
	const WrappedComponent = (props) => (
		<div>
			<div>Wrapped component</div>
			<div>It should be wrapped</div>
		</div>
	);
	const FollowingComponent = followingContainer(WrappedComponent, configs);
	const wrapper = mount(<FollowingComponent />);
	const container = document.getElementById(containerId);
	ReactDOM.render(<FollowingComponent />, container);
	const element = container.getElementsByClassName('following-container')[0];
	const computedStyle = window.getComputedStyle(element);
	const getLatestComputedStyle = () => {
		return window.getComputedStyle(element);
	}

	return {
		wrapper,
		WrappedComponent,
		computedStyle,
		getLatestComputedStyle
	};
}

export const renderComponent = (configs = {}) => {
	const containerId = prepareDocument();
	return mountComponent(configs, containerId);
}
