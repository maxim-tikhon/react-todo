import renderer from 'react-test-renderer';
import TaskInput from './TaskInput';

describe('TaskInput', () => {
	it('renders correctly', () => {
		const output = renderer.create(<TaskInput />).toJSON();
		expect(output).toMatchSnapshot();
	});
});
