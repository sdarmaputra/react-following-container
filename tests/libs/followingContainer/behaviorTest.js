import { expect } from 'chai';
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
				//window.scrollBy(0, 100);
				expect(this.component.computedStyle.top).to.equal(`${this.upperStopPoint}px`);	

			});
		});
	});
}

export default behaviorTest;
