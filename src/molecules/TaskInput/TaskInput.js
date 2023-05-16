import CheckBoxInput from "../../atoms/CheckBoxInput/CheckBoxInput";
import TextInput from "../../atoms/TextInput/TextInput";
import styles from "./TaskInput.module.scss";

const TaskInput = ({ onEnterTask }) => {
	return (
		<div>
			<CheckBoxInput />
			<TextInput
				className={styles.newTaskInput}
				placeholder="Please enter a new task and click Enter to save"
				onEnter={onEnterTask}
			/>
		</div>
	);
}

export default TaskInput;
