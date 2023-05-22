import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { addTask, deleteTask, checkTask, clearCompletedTasks } from '../slices/todoSlice';
import { TODO_STOARGE_NAME } from '../../utils/constants';

import localStorageMiddleware from './localStorageMiddleware ';

describe('localStorageMiddleware', () => {
	let store;

	beforeEach(() => {
		localStorage.clear();

		store = configureStore({
			reducer: {
				todo: todoReducer,
			},
			middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
			preloadedState: {
				todo: {
					tasks: [
						{
							id: '1',
							description: 'Task 1',
							completed: true,
						},
					],
				},
			},
		});
	});

	afterEach(() => {
		store = null;
	});

	it('should save tasks to local storage when addTask action is dispatched', () => {
		store.dispatch(addTask({ id: 1, description: 'Task 2' }));

		const storedTasks = JSON.parse(localStorage.getItem(TODO_STOARGE_NAME));

		expect(storedTasks).toHaveLength(2);
		expect(storedTasks[1].description).toBe('Task 2');
	});

	it('should save tasks to local storage when deleteTask action is dispatched', () => {
		localStorage.setItem(TODO_STOARGE_NAME, JSON.stringify([{ id: '1', description: 'Task 1' }]));
		store.dispatch(deleteTask('1'));

		const storedTasks = JSON.parse(localStorage.getItem(TODO_STOARGE_NAME));

		expect(storedTasks).toHaveLength(0);
	});

	it('should save tasks to local storage when checkTask action is dispatched', () => {
		localStorage.setItem(TODO_STOARGE_NAME, JSON.stringify([{ id: '1', description: 'Task 1', completed: true }]));
		store.dispatch(checkTask({ id: '1', checked: false }));

		const storedTasks = JSON.parse(localStorage.getItem(TODO_STOARGE_NAME));

		expect(storedTasks[0].completed).toBe(false);
	});

	it('should save tasks to local storage when clearCompletedTasks action is dispatched', () => {
		localStorage.setItem(TODO_STOARGE_NAME, JSON.stringify([{ id: 1, description: 'Task 1', completed: true }]));
		store.dispatch(clearCompletedTasks());

		const storedTasks = JSON.parse(localStorage.getItem(TODO_STOARGE_NAME));

		expect(storedTasks).toHaveLength(0);
	});
});
