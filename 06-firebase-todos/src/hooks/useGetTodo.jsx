import { db } from "../firebase";
import useGetDocument from "./useGetDocument";

export default function useGetTodo(id) {
    const { data: todo, loading } = useGetDocument(db, "todos", id);
    return { todo, loading };
}
