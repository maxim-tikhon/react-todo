import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoTemplate from './TodoTemplate';
import { FILTER } from '../../utils/constants';

describe('TodoTemplate', () => {
	const mockTasks = [
		{ id: '1', description: 'Task 1', completed: false },
		{ id: '2', description: 'Task 2', completed: true },
		{ id: '3', description: 'Task 3', completed: false },
	];

	const mockOnAddTask = jest.fn();

	it('renders correctly', () => {
		const output = renderer.create(<TodoTemplate />).toJSON();
		expect(output).toMatchSnapshot();
	});

	it('displays only active tasks when filter is set to "ACTIVE"', () => {
		const { container } = render(<TodoTemplate tasks={mockTasks} filter={FILTER.ACTIVE} />);

		const taskItems = container.querySelectorAll('.task');

		expect(taskItems.length).toBe(2);
	});

	test('displays only completed tasks when filter is set to "COMPLETED"', () => {
		const { container } = render(<TodoTemplate tasks={mockTasks} filter={FILTER.COMPLETED} />);

		const taskItems = container.querySelectorAll('.task');

		expect(taskItems.length).toBe(1);
	});

	test('displays all tasks when filter is set to "ALL"', () => {
		const { container } = render(<TodoTemplate tasks={mockTasks} filter={FILTER.ALL} />);

		const taskItems = container.querySelectorAll('.task');

		expect(taskItems.length).toBe(3);
	});

	test('displays message when no tasks match the filter', () => {
		const tasks = [{ id: '1', description: 'Task 1', completed: false }];

		render(<TodoTemplate tasks={tasks} filter={FILTER.COMPLETED} />);

		const noTasksMessage = screen.getByText('There are no tasks matching the filter');

		expect(noTasksMessage).toBeInTheDocument();
	});

	test('calls onAddTask callback when a new task is entered', () => {
		render(<TodoTemplate onAddTask={mockOnAddTask} />);

		const newTaskDescription = 'New Task';
		const taskInput = screen.getByPlaceholderText('Please enter a new task and click Enter to save');
		fireEvent.change(taskInput, { target: { value: newTaskDescription } });
		fireEvent.keyDown(taskInput, { key: 'Enter', code: 'Enter' });

		expect(mockOnAddTask).toHaveBeenCalledWith({
			id: expect.any(String),
			description: newTaskDescription,
			completed: false,
		});
	});
});
