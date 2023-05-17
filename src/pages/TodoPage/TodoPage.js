import TodoTemplate from "../../templates/TodoTemplate/TodoTemplate";
import { useSelector, useDispatch } from "react-redux";
import {
	addTask,
	deleteTask,
	checkTask,
	changeFilter,
	clearCompletedTasks,
	loadTasks
} from "../../store/slices/todoSlice";
import { useEffect } from "react";
import { TODO_STOARGE_NAME } from "../../utils/constants";

const TodoPage = () => {
	const tasks = useSelector((state) => state.todo.tasks);
	const filter = useSelector((state) => state.todo.filter);

	const dispatch = useDispatch();

	useEffect(() => {
		const storedTasks = localStorage.getItem(TODO_STOARGE_NAME);

		if (storedTasks) {
			const tasks = JSON.parse(storedTasks);
			dispatch(loadTasks(tasks));
		}
	}, []);

	return (
		<TodoTemplate
			tasks={tasks}
			filter={filter}
			onAddTask={(task) => dispatch(addTask(task))}
			onDeleteTask={(id) => dispatch(deleteTask(id))}
			onCheckTask={(task) => dispatch(checkTask(task))}
			onChangeFilter={(filter) => dispatch(changeFilter(filter))}
			onClearCompletedTasks={() => dispatch(clearCompletedTasks())}
		/>
	);
};

export default TodoPage;
