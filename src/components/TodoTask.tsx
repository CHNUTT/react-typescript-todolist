import { FC } from 'react';
import { ITask } from '../interfaces';

interface Props {
	task: ITask;
	deleteTask(taskNameToDelete: string): void;
}

const TodoTask: FC<Props> = ({ task, deleteTask }) => {
	return (
		<div className='task'>
			<div className='content'>
				<span>{task.taskName}</span>
				<span>{task.deadline}</span>
			</div>
			<button onClick={() => deleteTask(task.taskName)}>X</button>
		</div>
	);
};

export default TodoTask;
