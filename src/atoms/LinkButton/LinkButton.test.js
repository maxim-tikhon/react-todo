import renderer from 'react-test-renderer';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
	it('renders correctly', () => {
		const output = renderer.create(<LinkButton isActive>Test Bustton</LinkButton>).toJSON();
		expect(output).toMatchSnapshot();
	});
});
