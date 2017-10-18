//import hook from 'css-modules-require-hook';
//import sass from 'node-sass';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/*hook({
	extensions: ['.scss'],
	preprocessCss: (data, filename) => sass.renderSync({ 
		data,
		file: filename
	}).css
});
*/
Enzyme.configure({ adapter: new Adapter() });
