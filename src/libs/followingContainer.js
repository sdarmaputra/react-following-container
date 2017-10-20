import React from 'react';
import './followingContainer.scss';

const initialConfigs = {
	position: 'left',
	marginLeft: 0,
	marginRight: 0,
	upperStopPoint: 10,
	lowerStopPoint: 10,
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
				hidden: currentConfigs.hideOnStart,
				top: 0
			};
			this.currentConfigs = currentConfigs;
			this.availablePositions = ['left', 'right'];

			this.changeContainerPosition = this.changeContainerPosition.bind(this);
			this.handleMovementWhenScrollBeyondStopPoint = this.handleMovementWhenScrollBeyondStopPoint.bind(this); 
			this.handleMovementWhenScrollInsideStopPoint = this.handleMovementWhenScrollInsideStopPoint.bind(this);
		}
  
		componentDidMount() {
			this.setState({
				top: this.currentConfigs.upperStopPoint
			});
			window.addEventListener('scroll', this.changeContainerPosition);
		}

		componentWillUnmount() {
			window.removeEventListener('scroll', this.changeContainerPosition);
		}

		changeContainerPosition() {
			let scrollPosition = window.scrollY;
			let maxMovingPoint = document.documentElement.scrollHeight - this.currentConfigs.lowerStopPoint;
			let nextContainerPosition = scrollPosition + this.currentConfigs.viewportPaddingTop;	

			if (scrollPosition !== this.state.top && scrollPosition >= this.currentConfigs.upperStopPoint &&  nextContainerPosition <= maxMovingPoint) {
				this.handleMovementWhenScrollBeyondStopPoint(nextContainerPosition);
			} else if (scrollPosition !== this.state.top && scrollPosition < this.currentConfigs.upperStopPoint) {
				this.handleMovementWhenScrollInsideStopPoint();
			}
		}

		handleMovementWhenScrollBeyondStopPoint(nextContainerPosition) {
			let newState = Object.assign({}, { 
				top: nextContainerPosition
			}, 
			this.state.hidden ? { hidden: false } : {});
			this.setState(newState);
		}

		handleMovementWhenScrollInsideStopPoint() {
			let newState = Object.assign({}, {
				top: this.currentConfigs.upperStopPoint
			},
			this.currentConfigs.hideOnTop ? { hidden: true } : {});
			this.setState(newState);
		}

		render() {
			let position = this.availablePositions.includes(this.currentConfigs.position) ? this.currentConfigs.position : this.availablePositions[0]; 
			let style = {
				top: this.state.top,
				marginLeft: this.currentConfigs.marginLeft,
				marginRight: this.currentConfigs.marginRight
			};
			return (
				<div 
					ref={(wrapper) => this.wrapper = wrapper} 
					className={`following-container following-container--${position} ${this.state.hidden ? 'following-container--hidden' : ''}`}
					style={style}>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	}
}

export default followingContainer;
