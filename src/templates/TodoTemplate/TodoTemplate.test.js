import renderer from 'react-test-renderer';
import TodoTemplate from './TodoTemplate';

describe('TodoTemplate', () => {
	it('renders correctly', () => {
		const output = renderer.create(<TodoTemplate />).toJSON();
		expect(output).toMatchSnapshot();
	});
});
