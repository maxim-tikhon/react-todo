import { v4 as uuidv4 } from 'uuid';
import TaskInput from '../../molecules/TaskInput/TaskInput';
import TaskItem from '../../molecules/TaskItem/TaskItem';
import TodoFooter from '../../molecules/TodoFooter/TodoFooter';
import Card from '../../organisms/Card/Card';
import styles from './TodoTemplate.module.scss';
import taskFilter from '../../utils/tasksFilter';

function TodoTemplate({ tasks, filter, onAddTask, onDeleteTask, onCheckTask, onChangeFilter, onClearCompletedTasks }) {
	const filteredTasks = taskFilter.filterTasks(tasks, filter);
	const numberOfActiveTasks = tasks?.filter((task) => !task.completed)?.length;

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
					<Card>
						{filteredTasks?.length > 0 ? (
							filteredTasks.map((task) => (
								<TaskItem task={task} key={task.id} onDeleteTask={onDeleteTask} onCheckTask={onCheckTask} />
							))
						) : (
							<div>There are no tasks matching the filter</div>
						)}
						<TodoFooter
							numberOfActiveTasks={numberOfActiveTasks}
							filter={filter}
							onChangeFilter={onChangeFilter}
							onClearCompletedTasks={onClearCompletedTasks}
						/>
					</Card>
				)}

				{tasks?.length > 1 && <div className={styles.todoNote}>Drag and drop to reoder list</div>}
			</section>
		</div>
	);
}

export default TodoTemplate;
