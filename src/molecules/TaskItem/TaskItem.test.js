import renderer from 'react-test-renderer';
import TaskItem from './TaskItem';

describe('TaskItem', () => {
	it('renders correctly', () => {
		const task = {
			id: 1,
			description: 'Test Task',
			completed: true,
		};

		const output = renderer.create(<TaskItem task={task} />).toJSON();
		expect(output).toMatchSnapshot();
	});
});
