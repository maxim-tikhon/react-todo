import TaskInput from "../../molecules/TaskInput/TaskInput";
import TaskItem from "../../molecules/TaskItem/TaskItem";
import TodoFooter from "../../molecules/TodoFooter/TodoFooter";
import Card from "../../organisms/Card/Card";
import styles from "./TodoTemplate.module.scss";

const TodoTemplate = ({ tasks, onAddTask }) => {
	const addNewTask = (description) => {
		const newTask = {
			id: Date(),
			description,
			completed: false
		};

		onAddTask(newTask);
	};

	return (
		<div className={styles.todoContainer}>
			<section className={styles.todoSection}>
				<header>
					<h1 className={styles.todoHeader}>TODO</h1>
				</header>

				<Card>
					<TaskInput onEnterTask={addNewTask} />
				</Card>

				<Card>
					{tasks.map((task) => (
						<TaskItem task={task} key={task.id} />
					))}
					<TodoFooter />
				</Card>

				<div className={styles.todoNote}>Drag and drop to reoder list</div>
			</section>
		</div>
	);
};

export default TodoTemplate;
