import { createSelector } from '@reduxjs/toolkit';
import { FILTER } from '../../utils/constants';

const getTasks = (state) => state.todo.tasks;
const getFilter = (state) => state.todo.filter;

const getFilteredTasks = createSelector([getTasks, getFilter], (tasks, filter) => {
  switch (filter) {
    case FILTER.ALL:
      return tasks;
    case FILTER.ACTIVE:
      return tasks?.filter((task) => !task.completed);
    case FILTER.COMPLETED:
      return tasks?.filter((task) => task.completed);
    default:
      return tasks;
  }
});

export default getFilteredTasks;
