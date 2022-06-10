import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const get = async (endpoint) => {
    const response = await axios.get(endpoint);
    return response.data;
};

export const getCharacters = async () => {
    return await get(`${BASE_URL}/character`);
};

// export const getJokeByType = async ({ queryKey }) => {
//     const type = queryKey[1];
//     const response = await axios.get(`/joke/type/${type}`);
//     return response.data;
// };

export default {
    getCharacters,
};
