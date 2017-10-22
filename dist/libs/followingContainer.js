'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialConfigs = {
	position: 'left',
	marginLeft: 0,
	marginRight: 0,
	upperStopPoint: 10,
	lowerStopPoint: 10,
	viewportPaddingTop: 10,
	hideOnStart: false,
	hideOnTop: false
};

var followingContainer = function followingContainer(WrappedComponent) {
	var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var currentConfigs = Object.assign({}, initialConfigs, configs);
	return function (_React$Component) {
		_inherits(FollowingContainer, _React$Component);

		function FollowingContainer(props) {
			_classCallCheck(this, FollowingContainer);

			var _this = _possibleConstructorReturn(this, (FollowingContainer.__proto__ || Object.getPrototypeOf(FollowingContainer)).call(this, props));

			_this.state = {
				hidden: currentConfigs.hideOnStart,
				top: 0
			};
			_this.currentConfigs = currentConfigs;
			_this.availablePositions = ['left', 'right'];

			_this.changeContainerPosition = _this.changeContainerPosition.bind(_this);
			_this.handleMovementWhenScrollBeyondStopPoint = _this.handleMovementWhenScrollBeyondStopPoint.bind(_this);
			_this.handleMovementWhenScrollInsideStopPoint = _this.handleMovementWhenScrollInsideStopPoint.bind(_this);
			return _this;
		}

		_createClass(FollowingContainer, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.setState({
					top: this.currentConfigs.upperStopPoint
				});
				window.addEventListener('scroll', this.changeContainerPosition);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				window.removeEventListener('scroll', this.changeContainerPosition);
			}
		}, {
			key: 'changeContainerPosition',
			value: function changeContainerPosition() {
				var scrollPosition = window.scrollY;
				var maxMovingPoint = document.documentElement.scrollHeight - this.currentConfigs.lowerStopPoint;
				var nextContainerPosition = scrollPosition + this.currentConfigs.viewportPaddingTop;

				if (scrollPosition !== this.state.top && scrollPosition >= this.currentConfigs.upperStopPoint && nextContainerPosition <= maxMovingPoint) {
					this.handleMovementWhenScrollBeyondStopPoint(nextContainerPosition);
				} else if (scrollPosition !== this.state.top && scrollPosition < this.currentConfigs.upperStopPoint) {
					this.handleMovementWhenScrollInsideStopPoint();
				}
			}
		}, {
			key: 'handleMovementWhenScrollBeyondStopPoint',
			value: function handleMovementWhenScrollBeyondStopPoint(nextContainerPosition) {
				var newState = Object.assign({}, {
					top: nextContainerPosition
				}, this.state.hidden ? { hidden: false } : {});
				this.setState(newState);
			}
		}, {
			key: 'handleMovementWhenScrollInsideStopPoint',
			value: function handleMovementWhenScrollInsideStopPoint() {
				var newState = Object.assign({}, {
					top: this.currentConfigs.upperStopPoint
				}, this.currentConfigs.hideOnTop ? { hidden: true } : {});
				this.setState(newState);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var position = this.availablePositions.includes(this.currentConfigs.position) ? this.currentConfigs.position : this.availablePositions[0];
				var style = {
					top: this.state.top,
					marginLeft: this.currentConfigs.marginLeft,
					marginRight: this.currentConfigs.marginRight
				};
				return _react2.default.createElement(
					'div',
					{
						ref: function ref(wrapper) {
							return _this2.wrapper = wrapper;
						},
						className: 'following-container following-container--' + position + ' ' + (this.state.hidden ? 'following-container--hidden' : ''),
						style: style },
					_react2.default.createElement(WrappedComponent, this.props)
				);
			}
		}]);

		return FollowingContainer;
	}(_react2.default.Component);
};

exports.default = followingContainer;