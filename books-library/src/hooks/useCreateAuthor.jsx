import { useMutation, useQueryClient } from "react-query";
import BooksAPI from "../services/BooksAPI";

const useCreateAuthor = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (newAuthor) => {
            return BooksAPI.createAuthor(newAuthor);
        },
        {
            onSuccess: async () => {
                queryClient.invalidateQueries("authors");
            },
        }
    );
};
export default useCreateAuthor;
