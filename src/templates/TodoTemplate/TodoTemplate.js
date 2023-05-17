import { v4 as uuidv4 } from "uuid";
import TaskInput from "../../molecules/TaskInput/TaskInput";
import TaskItem from "../../molecules/TaskItem/TaskItem";
import TodoFooter from "../../molecules/TodoFooter/TodoFooter";
import Card from "../../organisms/Card/Card";
import styles from "./TodoTemplate.module.scss";

const TodoTemplate = ({ tasks, onAddTask, onDeleteTask, onCheckTask }) => {
	const addNewTask = (description) => {
		const newTask = {
			id: uuidv4(),
			description,
			completed: false,
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

				{tasks?.length > 0 && (
					<>
						<Card>
							{tasks.map((task) => (
								<TaskItem
									task={task}
									key={task.id}
									onDeleteTask={onDeleteTask}
									onCheckTask={onCheckTask}
								/>
							))}
							<TodoFooter />
						</Card>

						<div className={styles.todoNote}>Drag and drop to reoder list</div>
					</>
				)}
			</section>
		</div>
	);
};

export default TodoTemplate;
