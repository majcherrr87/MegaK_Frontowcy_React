import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './component/MainLayout'
import { Tasks } from './component/Tasks'
import { tasksLoader } from './loaders/tasks'
import { Task } from './component/Task'
import { taskLoader } from './loaders/task'
import { AddTask } from './component/AddTask'
import { addTaskAction } from './actions/addTask'

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Tasks />,
				loader: tasksLoader,
			},
			{
				path: 'create',
				element: <AddTask />,
				action: addTaskAction,
			},
			{
				path: ':id',
				element: <Task />,
				loader: taskLoader,
			},
		],
	},
])

export const AppTodo = () => {
	return <RouterProvider router={router} />
}
