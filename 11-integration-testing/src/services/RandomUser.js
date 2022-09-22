import axios from 'axios'

const BASE_URL = 'https://randomuser.me/api/'

/**
 * GET an endpoint
 *
 * @param {string} endpoint URI
 * @returns
 */
const get = async (endpoint) => {
	const res = await axios.get(BASE_URL + endpoint)
	return res.data
}

/**
 * Get random user(s)
 *
 * @param {number} count Number of users to get
 * @returns
 */
const getRandomUsers = (count = 5) => {
	return get(`?results=${count}`)
}

export {
	getRandomUsers,
}
