import React from 'react';

const TaskList = ({ tasks }) => {
	
	return (
		<div>
			{tasks && tasks.length > 0 ? (
				<ol>
					{tasks.map((task) => (
						<li key={task.id}>{task.text}</li>
					))}
				</ol>
			) : (
				<p>Nao ha terfas a mostrar!</p>
			)}
		</div>
	);
};

export default TaskList;	