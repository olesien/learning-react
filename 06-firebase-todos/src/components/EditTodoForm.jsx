import moment from 'moment'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { doc, updateDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

const EditTodoForm = ({ todo, onTodoUpdated }) => {
	const { register, handleSubmit, formState: { errors }} = useForm()

	const onUpdateTodo = async (data) => {
		// update firestore doc, plz
		await updateDoc(doc(db, 'todos', todo.id), {
			title: data.title,
			due_date: Timestamp.fromDate( new Date(data.due_date) ),
		})

		toast.success("💪🏻 Todo updated!")
		onTodoUpdated()
	}

	const due_date = moment( todo.due_date.toMillis() ).format('YYYY-MM-DD')

	return (
		<Form onSubmit={handleSubmit(onUpdateTodo)} noValidate>
			<Form.Group className="mb-3" controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control
					{...register("title", {
						required: "A todo is not a todo without a todo title",
						minLength: {
							value: 3,
							message: "That's too short to be a todo, better do it right now instead!",
						}
					})}
					defaultValue={todo.title}
					placeholder="Buy gluten-free bread"
					type="text"
				/>
				{errors.title && <div className="invalid">{errors.title.message}</div>}
			</Form.Group>

			<Form.Group className="mb-3" controlId="due_date">
				<Form.Label>Due date</Form.Label>
				<Form.Control
					{...register("due_date", {
						required: "A due date is required, otherwise it would be procastrinated forever",
					})}
					defaultValue={due_date}
					type="date"
				/>
				{errors.due_date && <div className="invalid">{errors.due_date.message}</div>}
			</Form.Group>

			<Button variant="success" type="submit">Save</Button>
		</Form>
	)
}

export default EditTodoForm
