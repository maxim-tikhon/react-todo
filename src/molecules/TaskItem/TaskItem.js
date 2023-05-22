import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxInput from '../../atoms/CheckBoxInput/CheckBoxInput';
import styles from './TaskItem.module.scss';

function TaskItem({ task, onDeleteTask, onCheckTask }) {
	const taskClasses = task.completed ? `${styles.task} ${styles.completed}` : styles.task;

	const toggleTask = () => {
		onCheckTask({ id: task.id, checked: !task.completed });
	};

	return (
		<div>
			<CheckBoxInput checked={task.completed} onCheck={(checked) => onCheckTask({ id: task.id, checked })} />
			<span
				data-testid="task"
				role="button"
				tabIndex="0"
				className={taskClasses}
				onClick={toggleTask}
				onKeyDown={toggleTask}
			>
				{task.description}
			</span>
			<ClearIcon className={styles.deleteIcon} onClick={() => onDeleteTask(task.id)} />
		</div>
	);
}

export default TaskItem;
