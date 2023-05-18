import renderer from 'react-test-renderer';
import TextInput from './TextInput';

describe('TextInput', () => {
	it('renders correctly', () => {
		const output = renderer.create(<TextInput placeholder="Test" />).toJSON();
		expect(output).toMatchSnapshot();
	});
});
