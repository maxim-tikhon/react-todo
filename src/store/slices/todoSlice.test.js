import { FILTER } from '../../utils/constants';
import todoReducer, { addTask, deleteTask, checkTask, changeFilter, clearCompletedTasks, loadTasks } from './todoSlice';


describe('todoSlice', () => {
	it('should handle addTask', () => {
		const initialState = {
			tasks: [],
			filter: FILTER.ALL,
		};

		const newState = todoReducer(initialState, addTask({ description: 'Task 1' }));

		expect(newState.tasks).toHaveLength(1);
		expect(newState.tasks[0].description).toBe('Task 1');
	});

	it('should handle deleteTask', () => {
		const initialState = {
			tasks: [
				{ id: 1, description: 'Task 1' },
				{ id: 2, description: 'Task 2' },
			],
			filter: FILTER.ALL,
		};

		const newState = todoReducer(initialState, deleteTask(1));

		expect(newState.tasks).toHaveLength(1);
		expect(newState.tasks[0].id).toBe(2);
	});

	it('should handle checkTask', () => {
		const initialState = {
			tasks: [
				{ id: 1, description: 'Task 1', completed: false },
				{ id: 2, description: 'Task 2', completed: false },
			],
			filter: FILTER.ALL,
		};

		const newState = todoReducer(initialState, checkTask({ id: 1, checked: true }));

		expect(newState.tasks[0].completed).toBe(true);
	});

	it('should handle changeFilter', () => {
		const initialState = {
			tasks: [],
			filter: FILTER.ALL,
		};

		const newState = todoReducer(initialState, changeFilter(FILTER.COMPLETED));

		expect(newState.filter).toBe(FILTER.COMPLETED);
	});

	it('should handle clearCompletedTasks', () => {
		const initialState = {
			tasks: [
				{ id: 1, description: 'Task 1', completed: true },
				{ id: 2, description: 'Task 2', completed: false },
			],
			filter: FILTER.ALL,
		};

		const newState = todoReducer(initialState, clearCompletedTasks());

		expect(newState.tasks).toHaveLength(1);
		expect(newState.tasks[0].id).toBe(2);
	});

	it('should handle loadTasks', () => {
		const initialState = {
			tasks: [],
			filter: FILTER.ALL,
		};

		const newState = todoReducer(initialState, loadTasks([{ id: 1, description: 'Task 1' }]));

		expect(newState.tasks).toHaveLength(1);
		expect(newState.tasks[0].description).toBe('Task 1');
	});
});
