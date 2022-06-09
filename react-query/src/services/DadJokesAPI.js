import axios from "axios";

axios.defaults.baseURL = "https://dad-jokes.p.rapidapi.com";
axios.defaults.headers = {
    "X-RapidAPI-Key": import.meta.env.VITE_DAD_JOKES_API_KEY,
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
};

export const getRandomJoke = async () => {
    const response = await axios.get("/random/joke");
    return response.data;
};

export const getJokeByType = async ({ queryKey }) => {
    const type = queryKey[1];
    const response = await axios.get(`/joke/type/${type}`);
    return response.data;
};

export default {
    getRandomJoke,
    getJokeByType,
};
