import CheckBoxInput from "../../atoms/CheckBoxInput/CheckBoxInput";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ task, onDeleteTask, onCheckTask }) => {
	const taskClasses = task.completed
		? `${styles.task} ${styles.completed}`
		: styles.task;

	return (
		<div>
			<CheckBoxInput
				checked={task.completed}
				onCheck={(checked) => onCheckTask({ id: task.id, checked })}
			/>
			<span
				className={taskClasses}
				onClick={() => onCheckTask({ id: task.id, checked: !task.completed })}
			>
				{task.description}
			</span>
			<ClearIcon
				className={styles.deleteIcon}
				onClick={() => onDeleteTask(task.id)}
			/>
		</div>
	);
};

export default TaskItem;
