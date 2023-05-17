import LinkButton from "../../atoms/LinkButton/LinkButton";
import { FILTER } from "../../utils/constants";
import styles from "./TodoFooter.module.scss";

const TodoFooter = ({ numberOfActiveTasks, filter, onChangeFilter, onClearCompletedTasks }) => {
	return (
		<div className={styles.todoFooter}>
			{numberOfActiveTasks > 0 ? (
				<span className={styles.totalCount}>
					{numberOfActiveTasks} {numberOfActiveTasks === 1 ? "task" : "tasks"} left
				</span>
			) : (
				<span className={styles.totalCount}>All tasks completed</span>
			)}
			<div className={styles.buttonsContainer}>
				<LinkButton isActive={filter === FILTER.ALL} onClick={() => onChangeFilter(FILTER.ALL)}>
					All
				</LinkButton>
				<LinkButton isActive={filter === FILTER.ACTIVE} onClick={() => onChangeFilter(FILTER.ACTIVE)}>
					Active
				</LinkButton>
				<LinkButton isActive={filter === FILTER.COMPLETED} onClick={() => onChangeFilter(FILTER.COMPLETED)}>
					Completed
				</LinkButton>
			</div>
			<LinkButton onClick={onClearCompletedTasks}>Clear Completed</LinkButton>
		</div>
	);
};

export default TodoFooter;
