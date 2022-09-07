import { orderBy, where } from "firebase/firestore";
import useStreamCollection from "./useStreamCollection";

const useGetTodos = (uid) => {
    return useStreamCollection(
        "todos",
        where("uid", "==", uid),
        orderBy("title")
    );
};

export default useGetTodos;
