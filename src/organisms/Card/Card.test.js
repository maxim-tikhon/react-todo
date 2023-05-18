import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card', () => {
	it('renders correctly', () => {
		const output = renderer.create(<Card>Test</Card>).toJSON();
		expect(output).toMatchSnapshot();
	});
});
