import { v4 as uuidv4 } from 'uuid';
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskInput from '../../components/molecules/TaskInput/TaskInput';
import TaskItem from '../../components/molecules/TaskItem/TaskItem';
import TodoFooter from '../../components/molecules/TodoFooter/TodoFooter';
import Card from '../../components/organisms/Card/Card';
import SortableCard from '../../components/organisms/SortableCard/SortableCard';
import styles from './TodoTemplate.module.scss';

function TodoTemplate({
  tasks,
  filteredTasks,
  filter,
  onAddTask,
  onDeleteTask,
  onCheckTask,
  onChangeFilter,
  onClearCompletedTasks,
  onReoderTasks,
}) {
  const numberOfActiveTasks = tasks?.filter((task) => !task.completed)?.length;

  const addNewTask = (description) => {
    const newTask = {
      id: uuidv4(),
      description,
      completed: false,
    };

    onAddTask(newTask);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDtragEnd = ({ active, over }) => {
    onReoderTasks({
      fromId: active.id,
      toId: over.id,
    });
  };

  return (
    <div className={styles.todoContainer}>
      <section className={styles.todoSection}>
        <header>
          <h1 className={styles.todoHeader}>TODO</h1>
        </header>

        <Card single>
          <TaskInput onEnterTask={addNewTask} />
        </Card>

        {tasks?.length > 0 && (
          <div className={styles.todoList}>
            {filteredTasks?.length > 0 ? (
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDtragEnd}>
                <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                  {filteredTasks.map((task) => (
                    <SortableCard key={task.id} id={task.id}>
                      <TaskItem task={task} onDeleteTask={onDeleteTask} onCheckTask={onCheckTask} />
                    </SortableCard>
                  ))}
                </SortableContext>
              </DndContext>
            ) : (
              <Card>There are no tasks matching the filter</Card>
            )}
            <Card>
              <TodoFooter
                numberOfActiveTasks={numberOfActiveTasks}
                filter={filter}
                onChangeFilter={onChangeFilter}
                onClearCompletedTasks={onClearCompletedTasks}
              />
            </Card>
          </div>
        )}

        {filteredTasks?.length > 0 && <div className={styles.todoNote}>Drag and drop to reoder list</div>}
      </section>
    </div>
  );
}

export default TodoTemplate;
