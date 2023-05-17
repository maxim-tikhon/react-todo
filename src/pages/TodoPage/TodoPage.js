import TodoTemplate from "../../templates/TodoTemplate/TodoTemplate";
import { useSelector, useDispatch } from "react-redux";
import {
	taskAdded,
	taskDeleted,
	taskChecked,
	filterChanged,
	completedTasksCleared
} from "../../store/todoSlice";

const TodoPage = () => {
	const tasks = useSelector((state) => state.todo.tasks);
	const filter = useSelector((state) => state.todo.filter);

	const dispatch = useDispatch();

	const addTask = (task) => dispatch(taskAdded(task));
	const deleteTask = (id) => dispatch(taskDeleted(id));
	const checkTask = (task) => dispatch(taskChecked(task));
	const changeFilter = (filter) => dispatch(filterChanged(filter));
	const clearCompletedTasks = () => dispatch(completedTasksCleared());

	return (
		<TodoTemplate
			tasks={tasks}
			filter={filter}
			onAddTask={addTask}
			onDeleteTask={deleteTask}
			onCheckTask={checkTask}
			onChangeFilter={changeFilter}
			onClearCompletedTasks={clearCompletedTasks}
		/>
	);
};

export default TodoPage;
