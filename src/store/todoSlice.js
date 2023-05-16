import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: []
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    taskAdded: (state, action) => {
      // Immer handle immutability
      state.tasks.push(action.payload);
    },
    taskDeleted: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id === action.payload);
    },
    taskChecked: (state, action) => {
      const { id, checked } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        existingTask.completed = checked;
      }
    }
  }
});

export const { taskAdded, taskDeleted, taskChecked } = todoSlice.actions;

export default todoSlice.reducer;
