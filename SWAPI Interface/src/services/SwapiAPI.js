/**
 * Service for communicating with the json-server backend
 */
import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

/**
 * Get all todos
 */
const getPeoples = async ({ queryKey }) => {
    const [_key, { page, search }] = queryKey;
    let pageUrl = "?page=1";
    if (page) {
        pageUrl = `?page=${page}`;
    }
    let searchUrl = "";
    if (search) {
        searchUrl = `&search=${search}`;
    }
    const res = await axios.get(`${BASE_URL}/people/${pageUrl}${searchUrl}`);
    return res.data;
};

const getPeople = async ({ queryKey }) => {
    const [_key, id] = queryKey;
    const res = await axios.get(`${BASE_URL}/people/${id}`);
    return res.data;
};

// const searchPeoples = async (search) => {
//     const res = await axios.get(`${BASE_URL}/people/?search=${search}`);
//     return res.data;
// };

const getFilms = async ({ queryKey }) => {
    const [_key, { page, search }] = queryKey;
    let pageUrl = "?page=1";
    if (page) {
        pageUrl = `?page=${page}`;
    }

    let searchUrl = "";
    if (search) {
        searchUrl = `&search=${search}`;
    }
    const res = await axios.get(`${BASE_URL}/films/${pageUrl}${searchUrl}`);
    return res.data;
};

const getFilm = async ({ queryKey }) => {
    const [_key, id] = queryKey;
    const res = await axios.get(`${BASE_URL}/films/${id}`);
    return res.data;
};

// const searchFilms = async (search) => {
//     const res = await axios.get(`${BASE_URL}/films/?search=${search}`);
//     return res.data;
// };

const changePage = async (newUrl) => {
    const res = await axios.get(newUrl);
    return res.data;
};

// /**
//  * Get a single todo
//  */
// const getTodo = async (id) => {
//     const res = await axios.get(`${BASE_URL}/todos/${id}`);
//     return res.data;
// };

// /**
//  * Create a new todo
//  *
//  * @param data Object with properties and values for the new todo
//  */
// const createTodo = async (data) => {
//     const res = await axios.post(`${BASE_URL}/todos`, data);
//     return res.data;
// };

// /**
//  * Update a todo
//  *
//  * @param todo_id Todo to update
//  * @param data Data to update todo with
//  */
// const updateTodo = async (todo_id, data) => {
//     const res = await axios.patch(`${BASE_URL}/todos/${todo_id}`, data);
//     return res.data;
// };

// /**
//  * Delete a todo
//  *
//  * @param todo_id Todo to delete
//  */
// const deleteTodo = async (todo_id) => {
//     const res = await axios.delete(`${BASE_URL}/todos/${todo_id}`);
//     return res.data;
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPeoples,
    getPeople,
    getFilms,
    getFilm,
    changePage,
};
