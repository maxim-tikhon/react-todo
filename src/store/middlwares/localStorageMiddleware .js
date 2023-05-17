import { TODO_STOARGE_NAME } from "../../utils/constants";
import { addTask, deleteTask, checkTask, clearCompletedTasks } from "../slices/todoSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
	const result = next(action);

	if (
		action.type === addTask.type ||
		action.type === deleteTask.type ||
		action.type === checkTask.type ||
		action.type === clearCompletedTasks.type
	) {
		const tasks = store.getState().todo.tasks;
		localStorage.setItem(TODO_STOARGE_NAME, JSON.stringify(tasks));
	}

	return result;
};

export default localStorageMiddleware;
