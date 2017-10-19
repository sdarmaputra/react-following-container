import { renderComponent } from './utils';

const customConfigurationsTest = () => {
	return describe('rendered with custom configurations', function() {
		describe('modify position option', function() {
			it('should have corresponding class and style when position set to left', function() {
				const initialComponent = renderComponent({ position: 'left' });
				expect(initialComponent.wrapper.find('.following-container--left')).to.have.length(1);
				expect(initialComponent.computedStyle.position).to.equal('absolute');
				expect(initialComponent.computedStyle.left).to.equal('0px');	
				expect(initialComponent.computedStyle.right).to.not.equal('0px');	
			});

			it('should have corresponding class and style when position set to right', function() {
				const initialComponent = renderComponent({ position: 'right' });
				expect(initialComponent.wrapper.find('.following-container--right')).to.have.length(1);
				expect(initialComponent.computedStyle.position).to.equal('absolute');
				expect(initialComponent.computedStyle.right).to.equal('0px');
				expect(initialComponent.computedStyle.left).to.not.equal('0px');
			});

			it('should set position to default if position option not  set', function() {
				const initialComponent = renderComponent();
				const availablePositions = initialComponent.wrapper.instance().availablePositions;
				const expectedClassName = availablePositions[0];
				expect(initialComponent.wrapper.find(`.following-container--${expectedClassName}`)).to.have.length(1);
			});
		});

		describe('modify marginLeft option', function() {
			it('should set margin-left style', function() {
				let marginLeft = 100;
				const initialComponent = renderComponent({ marginLeft: marginLeft });
				expect(initialComponent.computedStyle.marginLeft).to.equal(`${marginLeft}px`);
			});
		});		

		describe('modify marginRight option', function() {
			it('should set margin-right style', function() {
				let marginRight = 100;
				const initialComponent = renderComponent({ marginRight: marginRight });
				expect(initialComponent.computedStyle.marginRight).to.equal(`${marginRight}px`);
			});
		});
	});
}

export default customConfigurationsTest;
