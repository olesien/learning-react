import { useMemo } from "react";
import Table from "react-bootstrap/Table";
import useAuthors from "../hooks/useAuthors";
import BasicTable from "../components/BasicTable";

import { NavLink } from "react-router-dom";

export default function BooksPage() {
    const {
        isLoading: authorsLoading,
        error: authorsError,
        data: authors,
    } = useAuthors();
    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
            },
            { Header: "Date of birth", accessor: "date_of_birth" },
            {
                Header: "Link",
                Cell: ({ row: { original: author } }) => (
                    <NavLink to={`/author/${author.id}`}>Show</NavLink>
                ),
            },
        ],
        []
    );
    if (authorsLoading) return "Loading...";

    if (authorsError) return "An error has occurred: ";
    return <BasicTable data={authors} columns={columns} />;
    // return (
    //     <Table striped bordered hover>
    //         <thead>
    //             <tr>
    //                 <th>#</th>
    //                 <th>Name</th>
    //                 <th>Date of Birth</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {authors.map((author) => {
    //                 return (
    //                     <tr key={author.id}>
    //                         <td>{author.id}</td>
    //                         <td>
    //                             <NavLink to={"/author/" + author.id}>
    //                                 {author.name}
    //                             </NavLink>
    //                         </td>
    //                         <td>{author.date_of_birth}</td>
    //                     </tr>
    //                 );
    //             })}
    //         </tbody>
    //     </Table>
    // );
}
