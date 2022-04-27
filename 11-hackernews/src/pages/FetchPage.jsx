import useFetch from "../hooks/useFetch";

const FetchPage = () => {
    const { data, setUrl } = useFetch(
        "https://api.chucknorris.io/jokes/random"
    );
    return (
        <>
            <p>Fetch Page</p>
            <p>{data && data.value}</p>
        </>
    );
};

export default FetchPage;
