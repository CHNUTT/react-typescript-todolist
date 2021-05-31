import { ChangeEvent, FC, useState } from 'react';
import { ITask } from './interfaces';
import TodoTask from './components/TodoTask';
import './App.css';

const App: FC = () => {
	const [task, setTask] = useState<string>('');
	const [deadline, setDeadline] = useState<number>(0);
	const [todoList, setTodoList] = useState<ITask[]>([]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		if (e.target.name === 'task') {
			setTask(e.target.value);
			return;
		}
		setDeadline(+e.target.value);
	};

	const addTask = (): void => {
		if (!task) return;
		const newTask: ITask = {
			taskName: task,
			deadline: deadline,
		};
		setTodoList([...todoList, newTask]);
		setTask('');
		setDeadline(0);
	};

	return (
		<div className='App'>
			<div className='header'>
				<div className='inputContainer'>
					<input
						name='task'
						type='text'
						placeholder='Task...'
						value={task}
						onChange={handleChange}
					/>
					<input
						name='deadLine'
						type='number'
						placeholder='Deadline (in Days)...'
						value={deadline}
						onChange={handleChange}
					/>
				</div>
				<button onClick={addTask}>Add Task</button>
			</div>
			<div className='todoList'>
				{todoList.map((task, index) => (
					<TodoTask key={index} task={task} />
				))}
			</div>
		</div>
	);
};

export default App;
