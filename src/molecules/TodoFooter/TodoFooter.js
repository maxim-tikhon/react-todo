import LinkButton from "../../atoms/LinkButton/LinkButton";
import styles from "./TodoFooter.module.scss";

const TodoFooter = () => {
	return (
		<div className={styles.todoFooter}>
			<span className={styles.totalCount}>4 items left</span>
			<div className={styles.buttonsContainer}>
				<LinkButton isActive={true}>All</LinkButton>
				<LinkButton>Active</LinkButton>
				<LinkButton>Completed</LinkButton>
			</div>
			<LinkButton>Clear Completed</LinkButton>
		</div>
	);
};

export default TodoFooter;
