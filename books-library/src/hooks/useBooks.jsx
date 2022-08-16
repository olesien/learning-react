import BooksAPI from "../services/BooksAPI";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function useBooks() {
    return useQuery(["books"], BooksAPI.getBooks);
}
