import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { fbTimestampToDateString } from '../helpers/time'
import useGetTodo from '../hooks/useGetTodo'
import EditTodoForm from '../components/EditTodoForm'

const TodoPage = () => {
	const [showEditForm, setShowEditForm] = useState(false)
	const { id } = useParams()
	const { data: todo, loading } = useGetTodo(id)
	const navigate = useNavigate()

	const onTodoUpdated = () => {
		setShowEditForm(false)
	}

	const deleteTodo = async () => {
		const ref = doc(db, 'todos', id)
		await deleteDoc(ref)

		toast.success('💣 Todo deleted')

		// redirect user to todos list
		navigate('/todos', { replace: true })
	}

	const toggleTodo = async () => {
		const ref = doc(db, 'todos', id)
		await updateDoc(ref, {
			completed: !todo.completed,
		})
	}

	return (
		<Container className="py-3">

			{loading && <p>Loading todo...</p>}

			{!loading && !todo && <p>That's not a todo that exists...</p>}

			{!loading && todo && (
				<>
					<div className="d-flex justify-content-between align-items-start mb-3">
						<h1>{todo.title}</h1>
					</div>

					<dl className="row">
						<dt className="col-3">Due date</dt>
						<dd className="col-9">{fbTimestampToDateString(todo.due_date)}</dd>

						<dt className="col-3">Status</dt>
						<dd className="col-9">{todo.completed ? 'Completed' : 'Not completed'}</dd>
					</dl>

					<ButtonGroup className="todo-actions">
						<Button variant="primary" onClick={toggleTodo}>Toggle</Button>
						<Button variant="warning" onClick={() => setShowEditForm(!showEditForm)}>
							{showEditForm ? 'Cancel Edit' : 'Edit'}
						</Button>
						<Button variant="danger" onClick={deleteTodo}>Delete</Button>
					</ButtonGroup>

					{showEditForm && <>
						<hr className="my-4" />

						<EditTodoForm onTodoUpdated={onTodoUpdated} todo={todo} />
					</>}
				</>
			)}

		</Container>
	)
}

export default TodoPage
