import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxInput from '../../atoms/CheckBoxInput/CheckBoxInput';
import styles from './TaskItem.module.scss';

function TaskItem({ task, onDeleteTask, onCheckTask }) {
	const taskClasses = task.completed ? `${styles.task} ${styles.completed}` : styles.task;

	return (
		<div>
			<CheckBoxInput checked={task.completed} onCheck={(checked) => onCheckTask({ id: task.id, checked })} />
			<span className={taskClasses}>{task.description}</span>
			<ClearIcon className={styles.deleteIcon} onClick={() => onDeleteTask(task.id)} />
		</div>
	);
}

export default TaskItem;
