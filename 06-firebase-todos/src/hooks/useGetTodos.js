import useGetCollection from "./useGetCollection";
import useStreamCollection from "./useStreamCollection";

const useGetTodos = () => {
    return useStreamCollection("todos");
};

export default useGetTodos;
