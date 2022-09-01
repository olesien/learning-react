import useGetCollection from "./useGetCollection";
import useStreamSortedCollection from "./useStreamSortedCollection";

const useGetTodos = () => {
    return useStreamSortedCollection("todos", "deadline");
};

export default useGetTodos;
