import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TodoTemplate from '../../templates/TodoTemplate/TodoTemplate';
import {
	addTask,
	deleteTask,
	checkTask,
	changeFilter,
	clearCompletedTasks,
	loadTasks,
	reoderTasks,
} from '../../store/slices/todoSlice';
import { TODO_STOARGE_NAME } from '../../utils/constants';

function TodoPage() {
	const tasks = useSelector((state) => state.todo.tasks);
	const currentFilter = useSelector((state) => state.todo.filter);

	const dispatch = useDispatch();

	useEffect(() => {
		const storedTasks = localStorage.getItem(TODO_STOARGE_NAME);

		if (storedTasks) {
			const todos = JSON.parse(storedTasks);
			dispatch(loadTasks(todos));
		}
	}, []);

	return (
		<TodoTemplate
			tasks={tasks}
			filter={currentFilter}
			onAddTask={(task) => dispatch(addTask(task))}
			onDeleteTask={(id) => dispatch(deleteTask(id))}
			onCheckTask={(task) => dispatch(checkTask(task))}
			onChangeFilter={(filter) => dispatch(changeFilter(filter))}
			onClearCompletedTasks={() => dispatch(clearCompletedTasks())}
			onReoderTasks={({ fromId, toId }) => dispatch(reoderTasks({ fromId, toId }))}
		/>
	);
}

export default TodoPage;
