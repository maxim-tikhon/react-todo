import CheckBoxInput from '../../atoms/CheckBoxInput/CheckBoxInput';
import TextInput from '../../atoms/TextInput/TextInput';
import styles from './TaskInput.module.scss';

function TaskInput({ onEnterTask }) {
  return (
    <>
      <CheckBoxInput disabled />
      <TextInput
        className={styles.newTaskInput}
        placeholder="Please enter a new task and click Enter to save"
        onEnter={onEnterTask}
      />
    </>
  );
}

export default TaskInput;
