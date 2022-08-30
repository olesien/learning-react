import { db } from "../firebase";
import useGetCollection from "./useGetCollection";

export default function useGetTodos() {
    const { data: todos, loading } = useGetCollection(db, "todos");
    return { todos, loading };
}
