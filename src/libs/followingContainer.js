import React from 'react';
import './followingContainer.scss';

const initialConfigs = {
	upperStopPoint: 10,
	viewportPaddingTop: 10,
	hideOnStart: false,
	hideOnTop: false
};

const followingContainer = (WrappedComponent, configs = {}) => {
	let currentConfigs = Object.assign({}, initialConfigs, configs);
	return class FollowingContainer extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				hidden: currentConfigs.hideOnStart
			};
			this.setContainerInitialPosition = this.setContainerInitialPosition.bind(this);
			this.changeContainerPosition = this.changeContainerPosition.bind(this);
		}
			
		componentDidMount() {
			this.setContainerInitialPosition();
			window.addEventListener('scroll', this.changeContainerPosition);
		}

		componentWillUnmount() {
			window.removeEventListener('scroll', this.changeContainerPosition);
		}

		setContainerInitialPosition() {
			this.wrapper.setAttribute('style', `top: ${currentConfigs.upperStopPoint}px`);
		}

		changeContainerPosition() {
			let scrollPosition = window.scrollY;
			let componentPosition = this.wrapper.offsetTop;

			if (scrollPosition !== componentPosition && scrollPosition > currentConfigs.upperStopPoint) {
				if (this.state.hidden) this.setState({ hidden: false });
				this.wrapper.setAttribute('style', `top: ${scrollPosition + currentConfigs.viewportPaddingTop}px`);
			}
			if (scrollPosition !== componentPosition && scrollPosition <= currentConfigs.upperStopPoint) {
				this.wrapper.setAttribute('style', `top: ${currentConfigs.upperStopPoint}px`);
			}
			if (scrollPosition <= currentConfigs.upperStopPoint && configs.hideOnTop) this.setState({ hidden: true });
		}

		render() {
			return (
				<div ref={(wrapper) => this.wrapper = wrapper} className={`following-container ${this.state.hidden ? 'following-container--hidden' : ''}`}>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	}
}

export default followingContainer;
