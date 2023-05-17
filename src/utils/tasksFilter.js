import { FILTER } from "./constants";

const taskFilter = {
	filterTasks(tasks, filter) {
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
	}
};

export default taskFilter;
