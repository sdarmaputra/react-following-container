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

			it('should change its top position if window scrolled more than upperStopPoint', function(done) {
				let nextYPosition = 400;
				let currentConfigs = this.component.wrapper.instance().currentConfigs;
				let expectedYPosition = nextYPosition + currentConfigs.viewportPaddingTop;
				window.scrollTo(0, nextYPosition);
				let wait = setTimeout(function() {				
					expect(this.component.getLatestComputedStyle().top).to.equal(`${expectedYPosition}px`);
					clearTimeout(wait);
					done();
				}.bind(this), 1000);
			});

			it('should change its top position to upperStopPoint if window scrolled upward to lower than or equal to upperStopPoint', function(done) {
				let nextYPosition = 100;
				let currentConfigs = this.component.wrapper.instance().currentConfigs;
				let expectedYPosition = currentConfigs.upperStopPoint;
				window.scrollTo(0, nextYPosition);
				let wait = setTimeout(function() {
					expect(this.component.getLatestComputedStyle().top).to.equal(`${expectedYPosition}px`);
					clearTimeout(wait);
					done();
				}.bind(this), 1000);
			});
		});
	
		describe('related to lowerStopPoint option', function() {
			beforeEach(function() {
				this.upperStopPoint = 200;
				this.lowerStopPoint = 1000;
				this.component = renderComponent({ upperStopPoint: this.upperStopPoint, lowerStopPoint: this.lowerStopPoint });
			});

			it('should change its top position if window scrolled between upperStopPoint and lowerStopPoint', function(done) {
				let nextYPosition = 1809;
				let currentConfigs = this.component.wrapper.instance().currentConfigs;
				let oldYPosition = this.component.getLatestComputedStyle().top;
				let expectedYPosition = nextYPosition + currentConfigs.viewportPaddingTop;
				window.scrollTo(0, nextYPosition);
				let wait = setTimeout(function() {
					expect(this.component.getLatestComputedStyle().top).to.not.equal(`${oldYPosition}px`);
					expect(this.component.getLatestComputedStyle().top).to.equal(`${expectedYPosition}px`);
					clearTimeout(wait);
					done();
				}.bind(this), 1000);
			});

			it('should not change its top position beyond lowerStopPoint', function(done) {
				let nextYPosition = 2100;
				let currentConfigs = this.component.wrapper.instance().currentConfigs;
				let oldYPosition = this.component.getLatestComputedStyle().top;
				window.scrollTo(0, nextYPosition);
				let wait = setTimeout(function() {
					expect(this.component.getLatestComputedStyle().top).to.equal(`${oldYPosition}`);
					clearTimeout(wait);
					done();
				}.bind(this), 1000);
			});
		});

		describe('related to hideOnStart option', function() {
			beforeEach(function(done) {
				this.upperStopPoint = 200;
				this.lowerStopPoint = 200;
				this.hideOnStart = true;
				window.scrollTo(0, 0);
				let wait = setTimeout(function() {
					this.component = renderComponent({
						upperStopPoint: this.upperStopPoint,
						lowerStopPoint: this.lowerStopPoint,
						hideOnStart: this.hideOnStart
					});
					clearTimeout(wait);
					done();
				}.bind(this), 1000);
			});	

			it('should have class name "following-container--hidden" after initial render', function() {
				expect(this.component.wrapper.find('.following-container--hidden')).to.have.length(1);
			});		

			it('should have zero opacity after initial render', function() {
				expect(this.component.getLatestComputedStyle().opacity).to.equal('0');
			});

			it('should have zero opacity when window scroll below upperStopPoint', function(done) {
				let nextYPosition = 100;
				window.scrollTo(0, nextYPosition);
				let wait = setTimeout(function() {
					expect(this.component.getLatestComputedStyle().opacity).to.equal('0');
					done();
				}.bind(this), 1000);
			});
				
			it('should have full opacity when window scroll beyond upperStopPoint', function(done) {
				let nextYPosition = 210;
				window.scrollTo(0, nextYPosition);
				let wait = setTimeout(function() {
					expect(this.component.getLatestComputedStyle().opacity).to.equal('1');
					done();
				}.bind(this), 1000);
			});	
		});
			
		describe('related to hideOnTop option', function() {
			beforeEach(function() {
				this.upperStopPoint = 200;
				this.lowerStopPoint = 200;
				this.hideOnTop = true;
				this.component = renderComponent({
					upperStopPoint: this.upperStopPoint,
					lowerStopPoint: this.lowerStopPoint,
					hideOnTop: this.hideOnTop
				});
			});	

			it('should have full opacity when window scrolled beyond upperStopPoint', function(done) {
				window.scrollTo(0, 205);
				let wait = setTimeout(function() {
					expect(this.component.getLatestComputedStyle().opacity).to.equal('1');
					clearTimeout(wait);
					done();
				}.bind(this), 1000);
			});

			it('should have zero opacity when window scrolled below upperStopPoint', function(done) {
				let nextYPosition = 100;
				window.scrollTo(0, nextYPosition);
				let wait = setTimeout(function() {
					expect(this.component.getLatestComputedStyle().opacity).to.equal('0');
					clearTimeout(wait);
					done();
				}.bind(this), 1000);
			});		
			
			it('should have class name "following-container--hidden" when window scrolled below upperStopPoint', function(done) {
				this.timeout(3000);
				let nextYPosition = 100;
				window.scrollTo(0, 600);
				let initialWait = setTimeout(function() {
					window.scrollTo(0, nextYPosition);
					let wait = setTimeout(function() {
						let classList = this.component.element.classList;
						expect(classList.contains('following-container--hidden')).to.equal(true);
						clearTimeout(wait);
						done();
					}.bind(this), 1000);
					clearTimeout(initialWait);
				}.bind(this), 1000);
			});			
		});
	});
}

export default behaviorTest;
