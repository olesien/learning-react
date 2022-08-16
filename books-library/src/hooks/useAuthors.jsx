import BooksAPI from "../services/BooksAPI";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function useAuthors() {
    return useQuery(["authors"], BooksAPI.getAuthors);
}
