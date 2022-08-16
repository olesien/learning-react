import React from "react";
import BooksAPI from "../services/BooksAPI";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Table from "react-bootstrap/Table";

export default function BooksPage() {
    const {
        isLoading: booksLoading,
        error: booksError,
        data: books,
    } = useQuery(["books"], BooksAPI.getBooks);
    const {
        isLoading: authorsLoading,
        error: authorsError,
        data: authors,
    } = useQuery(["authors"], BooksAPI.getAuthors);
    console.log(books);
    console.log(authors);
    if (booksLoading || authorsLoading) return "Loading...";

    if (booksError || authorsError) return "An error has occurred: ";
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Published</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => {
                    const author = authors.find(
                        (author) => author.id === book.authorId
                    );
                    return (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{author ? author.name : "unknown"}</td>
                            <td>{book.pages}</td>
                            <td>{book.published}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
