import React from "react";

import Item from "./Item";
import Row from "react-bootstrap/Row";

export default function ListItems({ data, type, loading }) {
    return (
        <>
            {data && !loading ? (
                <Row xs={1} md={2} lg={3} xxl={4} className="g-3">
                    {data.results.map((item, index) => (
                        <Item key={index} item={item} type={type} />
                    ))}
                </Row>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
