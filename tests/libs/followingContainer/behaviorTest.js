import { renderComponent } from './utils';

const behaviorTest = () => {
	return describe('behavior', function() {
		describe('related to upperStopPoint option', function() {
			beforeEach(function() {
				this.upperStopPoint = 200;
				this.component = renderComponent({ upperStopPoint: this.upperStopPoint });
			});

			it('should place the component based on upperStopPoint after initial render', function() {
				expect(this.component.computedStyle.top).to.equal(`${this.upperStopPoint}px`);	
			});

			it('should not change its top position if window scrolled lower than upperStopPoint', function() {
				window.scrollTo(0, 100);
				expect(this.component.computedStyle.top).to.equal(`${this.upperStopPoint}px`);	
			});

			it('should change its top position if window scrolled more than upperStopPoint', function() {
				let nextYPosition = 400;
				let currentConfigs = this.component.wrapper.instance().currentConfigs;
				let expectedYPosition = nextYPosition + currentConfigs.viewportPaddingTop;
				window.scrollTo(0, nextYPosition);
				let wait = setTimeout(function() {
					expect(this.component.getLatestComputedStyle().top).to.equal(`${expectedYPosition}px`);
					clearTimeout(wait);
				}, 5000);
			});

			it('should change its top position to upperStopPoint if window scrolled upward to lower than or equal to upperStopPoint', function() {
				let nextYPosition = 100;
				let currentConfigs = this.component.wrapper.instance().currentConfigs;
				let expectedYPosition = currentConfigs.upperStopPoint;
				window.scrollTo(0, nextYPosition);
				let wait = setTimeout(function() {
					expect(this.component.getLatestComputedStyle().top).to.equal(`${expectedYPosition}px`);
					clearTimeout(wait);
				}, 5000);
			});

		});
	});
}

export default behaviorTest;
