import { createSlice } from '@reduxjs/toolkit';
import { FILTER } from '../../utils/constants';

const initialState = {
	tasks: [],
	filter: FILTER.ALL,
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTask: (state, action) => {
			// Immer handle immutability
			state.tasks.push(action.payload);
		},
		deleteTask: (state, action) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		checkTask: (state, action) => {
			const { id, checked } = action.payload;
			const existingTask = state.tasks.find((task) => task.id === id);
			if (existingTask) {
				existingTask.completed = checked;
			}
		},
		changeFilter: (state, action) => {
			state.filter = action.payload;
		},
		clearCompletedTasks: (state) => {
			state.tasks = state.tasks.filter((task) => !task.completed);
		},
		loadTasks: (state, action) => {
			state.tasks = action.payload;
		},
		reoderTasks: (state, action) => {
			const fromIndex = state.tasks.findIndex((task) => task.id === action.payload.fromId);
			const toIndex = state.tasks.findIndex((task) => task.id === action.payload.toId);
			const element = state.tasks[fromIndex];
			state.tasks.splice(fromIndex, 1);
			state.tasks.splice(toIndex, 0, element);
		},
	},
});

export const { addTask, deleteTask, checkTask, changeFilter, clearCompletedTasks, loadTasks, reoderTasks } =
	todoSlice.actions;

export default todoSlice.reducer;
