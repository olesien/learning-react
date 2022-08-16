import BooksAPI from "../services/BooksAPI";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function useAuthor(id) {
    //console.log(id);
    return useQuery(["author", id], BooksAPI.getAuthor);
}
