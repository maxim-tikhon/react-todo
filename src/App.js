import "./App.scss";
import TodoTemplate from "./templates/TodoTemplate/TodoTemplate";

function App() {
	const tasks = [
		{
			id: 1,
			description: "Read React documentation",
			completed: true,
		},
		{
			id: 2,
			description: "Complete React course",
			completed: false,
		},
		{
			id: 3,
			description: "Learn English",
			completed: false,
		},
		{
			id: 4,
			description: "Listen to music",
			completed: false,
		},
		{
			id: 5,
			description: "Cook a dinner for family",
			completed: false,
		},
	];

	return (
		<TodoTemplate tasks={tasks} />
	);
}

export default App;
