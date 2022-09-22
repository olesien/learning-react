const TodoCounter = ({ count }) => {
	const msg = count
		? count === 1
			? <span>You only have 1 todo left, get on it 🤩!</span>
			: <span>You have {count} todos left 😩</span>
		: <span>You have 0 todos 🥳!</span>

	return (
		<div className="todo-counter mt-2">
			{msg}
		</div>
	)
}

export default TodoCounter
