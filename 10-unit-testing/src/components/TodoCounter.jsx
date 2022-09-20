const TodoCounter = ({ count }) => {
	const msg = count
		? count === 1
			? <span>You only got 1 thing left to do, get on it!</span>
			: <span>You have {count} todos left</span>
		: <span>You got nothing to do</span>

	return (
		<div className="todo-counter mt-2">
			{msg}
		</div>
	)
}

export default TodoCounter
