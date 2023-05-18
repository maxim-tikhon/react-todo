import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import TodoPage from './TodoPage';
import { FILTER } from '../../utils/constants';
import todoReducer from '../../store/slices/todoSlice';

describe('TodoPage', () => {
	let store;

	beforeEach(() => {
		store = configureStore({
			reducer: {
				todo: todoReducer,
			},
			preloadedState: {
				todo: {
					tasks: [
						{
							id: '1',
							description: 'Task',
							completed: false,
						},
						{
							id: '2',
							description: 'Task 2',
							completed: true,
						},
					],
					filter: FILTER.ALL,
				},
			},
		});
	});

	afterEach(() => {
		store = null;
	});

	it('renders correctly', () => {
		const output = renderer
			.create(
				<Provider store={store}>
					<TodoPage />
				</Provider>
			)
			.toJSON();
		expect(output).toMatchSnapshot();
	});

	it('dispatches addTask action when new task entered', () => {
		const { container } = render(
			<Provider store={store}>
				<TodoPage />
			</Provider>
		);

		const inputElement = container.querySelector('input[type="text"]');
		fireEvent.change(inputElement, { target: { value: 'New Task' } });
		fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

		const state = store.getState();
		expect(state.todo.tasks[2].description).toEqual('New Task');
	});

	it('dispatches changeFilter action when filter is changed', () => {
		render(
			<Provider store={store}>
				<TodoPage />
			</Provider>
		);

		const filter = FILTER.COMPLETED;
		fireEvent.click(screen.getByText('Completed'));

		const state = store.getState();
		expect(state.todo.filter).toBe(filter);
	});

	it('dispatches clearCompletedTasks action when "Clear Completed" is clicked', () => {
		render(
			<Provider store={store}>
				<TodoPage />
			</Provider>
		);

		fireEvent.click(screen.getByText('Clear Completed'));

		const state = store.getState();
		expect(state.todo.tasks.length).toBe(1);
	});
});
