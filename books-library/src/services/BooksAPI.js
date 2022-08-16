/* eslint-disable no-unused-vars */
/**
 * Service for communicating with the json-server backend
 */
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001'

const FAKE_SLOW_API = false
const FAKE_SLOW_API_DELAY = 1500

/**
 * GET an endpoint
 *
 * @param {string} endpoint
 * @returns Promise
 */
const get = async (endpoint) => {
	const res = await axios.get(endpoint)

	FAKE_SLOW_API && await new Promise(r => setTimeout(r, FAKE_SLOW_API_DELAY))

	return res.data
}

/**
 *
 * Books
 *
 */

/**
 * Get all books (with author)
 */
const getBooks = () => {
	return get('/books?_expand=author')
}

/**
 * Get a single book (with author)
 */
const getBook = (id) => {
	return get(`/books/${id}?_expand=author`)
}

/**
 * Create a new book
 *
 * @param data Object with properties and values for the new book
 */
const createBook = async (data) => {
	const res = await axios.post(`/books`, data)
	return res.data
}

/**
 * Update a book
 *
 * @param book_id Book to update
 * @param data Data to update book with
 */
const updateBook = async (book_id, data) => {
	const res = await axios.patch(`/books/${book_id}`, data)
	return res.data
}

/**
 * Delete a book
 *
 * @param book_id Book to delete
 */
const deleteBook = async (book_id) => {
	const res = await axios.delete(`/books/${book_id}`)
	return res.data
}

/**
 *
 * Authors
 *
 */

/**
 * Get all authors
 */
const getAuthors = () => {
	return get('/authors')
}

/**
 * Get a single author (with their books)
 */
const getAuthor = (id) => {
	return get(`/authors/${id}?_embed=books`)
}

const exports = {
	getBooks,
	getBook,
	createBook,
	updateBook,
	deleteBook,
	getAuthors,
	getAuthor,
}

export default exports
