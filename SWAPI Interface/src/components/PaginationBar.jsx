import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function PaginationBar({ data, changePage, page, loading }) {
    //Depending on what direction, initiate the changePage function that is ran in Films Or Peoples.
    const navigate = (direction) => {
        //Not loading
        if (!loading) {
            //Go back one if possible
            if (data.previous && direction === "back" && page > 0) {
                changePage(data.previous, Number(page) - 1);
            }

            //Go forward one page if possible
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
                        Page {page ? page : 1} / {Math.ceil(data.count / 10)}
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
