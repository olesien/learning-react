import useStreamDocument from "./useStreamDocument";

const useGetTodo = (id, uid) => {
    return useStreamDocument("todos", id);
};

export default useGetTodo;
