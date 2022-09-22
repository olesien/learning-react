import { render, screen } from '@testing-library/react'
import TodoCounter from './TodoCounter'

// test correctly counts 0 todos
it("correctly counts 0 todos", () => {
	// render
	render(<TodoCounter count={0} />)

	// find
	const spanElement = screen.getByText(/0 todos/i)

	// assert
	expect(spanElement).toBeInTheDocument()
})

// test correctly counts 1 todo
it("correctly counts 1 todo", () => {
	// render
	render(<TodoCounter count={1} />)

	// find
	const spanElement = screen.getByText(/1 todo left/i)

	// assert
	expect(spanElement).toBeInTheDocument()
})

// test correctly counts multiple todos
it("correctly counts multiple todos", () => {
	// render
	render(<TodoCounter count={5} />)

	// find
	const spanElement = screen.getByText(/5 todos left/i)

	// assert
	expect(spanElement).toBeInTheDocument()
})
