import axios from "axios";

export const getRandomDog = async () => {
    const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random",
        {
            headers: { Accept: "application/json" },
        }
    );
    return response.data;
};
export default { getRandomDog };
