import CheckBoxInput from "../../atoms/CheckBoxInput/CheckBoxInput";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ task }) => {
	const taskClasses = task.completed
		? `${styles.task} ${styles.completed}`
		: styles.task;

	return (
		<div>
			{/* doesn't work because state is not updated */}
			<CheckBoxInput checked={task.completed} />
			<span className={taskClasses}>{task.description}</span>
			<ClearIcon className={styles.deleteIcon} />
		</div>
	);
};

export default TaskItem;
