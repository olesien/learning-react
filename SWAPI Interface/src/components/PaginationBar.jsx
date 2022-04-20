import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function PaginationBar({ data }) {
    // return <div>Pagination, count: {data && data.count}</div>;
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }
    return <Pagination>{items}</Pagination>;
}
