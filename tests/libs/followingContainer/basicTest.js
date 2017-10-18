import { renderComponent } from './utils';

const basicTest = () => { 
	return describe('default render', function() {
		beforeEach(function() {
			const initialComponent = renderComponent();
			this.WrappedComponent = initialComponent.WrappedComponent;
			this.wrapper = initialComponent.wrapper;
			this.computedStyle = initialComponent.computedStyle;
		});

		it('should wrap another component', function() {
			expect(this.wrapper.contains(this.WrappedComponent)).to.equal(true);
		});

		it('should have state with default properties', function() {
			expect(this.wrapper.instance()).to.have.property('state');
			expect(this.wrapper.instance().state).to.have.all.keys(['hidden', 'top']);
		});

		it('should have currentConfigs property', function() {
			expect(this.wrapper.instance()).to.have.property('currentConfigs');
		});

		it('should have default properties in currentConfigs', function() {
			let currentConfigs = this.wrapper.instance().currentConfigs;
			expect(currentConfigs).to.have.all.keys([
				'position',
				'marginLeft',
				'marginRight',
				'upperStopPoint',
				'lowerStopPoint',
				'viewportPaddingTop',
				'hideOnStart',
				'hideOnTop'
			]);
		});

		it('should have class following-container', function() {
			expect(this.wrapper.find('.following-container')).to.have.length(1);
		});

		it('should have intial style attributes', function() {
			expect(this.computedStyle.position).to.equal('absolute');
			expect(this.computedStyle.top).to.equal('10px');
			expect(this.computedStyle.marginLeft).to.equal('0px');
			expect(this.computedStyle.marginRight).to.equal('0px');
		});
	});
}

export default basicTest;
