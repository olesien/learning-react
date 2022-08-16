import React from "react";
import Table from "react-bootstrap/Table";
import useBooks from "../hooks/useBooks";

export default function BooksPage() {
    const {
        isLoading: booksLoading,
        error: booksError,
        data: books,
    } = useBooks();
    console.log(books);
    if (booksLoading) return "Loading...";

    if (booksError) return "An error has occurred: ";
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
                    return (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author.name}</td>
                            <td>{book.pages}</td>
                            <td>{book.published}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
