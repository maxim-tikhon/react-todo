import { TODO_STOARGE_NAME } from '../../utils/constants';
import { addTask, deleteTask, checkTask, clearCompletedTasks, reoderTasks } from '../slices/todoSlice';

const localStorageMiddleware = (store) => (next) => (action) => {
	const result = next(action);

	if (
		action.type === addTask.type ||
		action.type === deleteTask.type ||
		action.type === checkTask.type ||
		action.type === clearCompletedTasks.type ||
		action.type === reoderTasks.type
	) {
		const { tasks } = store.getState().todo;
		localStorage.setItem(TODO_STOARGE_NAME, JSON.stringify(tasks));
	}

	return result;
};

export default localStorageMiddleware;
