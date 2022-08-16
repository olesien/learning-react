import React from "react";
import Table from "react-bootstrap/Table";
import useAuthor from "../hooks/useAuthor";
import { Routes, Route, useParams } from "react-router-dom";

export default function BooksPage() {
    let { id } = useParams();
    //console.log(id);
    const {
        isLoading: authorLoading,
        error: authorError,
        data: author,
    } = useAuthor(id);
    if (authorLoading) return "Loading...";

    if (authorError) return "An error has occurred: ";
    return (
        <>
            <h2>{author.name}</h2>
            <p>{author.date_of_birth}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Pages</th>
                        <th>Published</th>
                    </tr>
                </thead>
                <tbody>
                    {author.books.map((book) => {
                        return (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.pages}</td>
                                <td>{book.published}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
