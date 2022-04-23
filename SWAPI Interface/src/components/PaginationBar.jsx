import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function PaginationBar({ data, changePage, page, loading }) {
    const navigate = (direction) => {
        if (!loading) {
            if (data.previous && direction === "back" && page > 0) {
                changePage(data.previous, Number(page) - 1);
            }

            if (
                data.next &&
                direction === "forward" &&
                page < Math.ceil(data.count / 10)
            ) {
                changePage(data.next, Number(page) + 1);
            }
        }
    };

    return (
        <Container
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px",
            }}
        >
            {data && (
                <>
                    <Button
                        style={{ justifySelf: "baseline" }}
                        variant="primary"
                        disabled={!data.previous}
                        onClick={() => navigate("back")}
                    >
                        Previous Page
                    </Button>
                    <p style={{ justifySelf: "center" }}>
                        Page {page} / {Math.ceil(data.count / 10)}
                    </p>
                    <Button
                        style={{ justifySelf: "end" }}
                        variant="primary"
                        disabled={!data.next}
                        onClick={() => navigate("forward")}
                    >
                        Next Page
                    </Button>
                </>
            )}
        </Container>
    );
}
