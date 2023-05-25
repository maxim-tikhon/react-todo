import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxInput from '../../atoms/CheckBoxInput/CheckBoxInput';
import styles from './TaskItem.module.scss';

function TaskItem({ task, onDeleteTask, onCheckTask }) {
  return (
    <>
      <CheckBoxInput
        label={task.description}
        checked={task.completed}
        onCheck={(checked) => onCheckTask({ id: task.id, checked })}
      />
      <ClearIcon className={styles.deleteIcon} onClick={() => onDeleteTask(task.id)} />
    </>
  );
}

export default TaskItem;
