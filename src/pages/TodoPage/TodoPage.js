import TodoTemplate from "../../templates/TodoTemplate/TodoTemplate";
import { useSelector, useDispatch } from "react-redux";
import { taskAdded, taskDeleted, taskChecked } from "../../store/todoSlice";

const TodoPage = () => {
	const tasks = useSelector(state => state.todo.tasks);
	const dispatch = useDispatch();

	const addTask = (task) => dispatch(taskAdded(task));
	// the same for other actions

  // const tasks = [
	// 	{
	// 		id: 1,
	// 		description: "Read React documentation",
	// 		completed: true,
	// 	},
	// 	{
	// 		id: 2,
	// 		description: "Complete React course",
	// 		completed: false,
	// 	},
	// 	{
	// 		id: 3,
	// 		description: "Learn English",
	// 		completed: false,
	// 	},
	// 	{
	// 		id: 4,
	// 		description: "Listen to music",
	// 		completed: false,
	// 	},
	// 	{
	// 		id: 5,
	// 		description: "Cook a dinner for family",
	// 		completed: false,
	// 	},
	// ];

	return (
		<TodoTemplate tasks={tasks} onAddTask={addTask} />
	);
};

export default TodoPage;
