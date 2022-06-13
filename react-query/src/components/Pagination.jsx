import Button from "react-bootstrap/Button";

export default function Pagination({
    page,
    isPreviousData,
    hasPreviousPage,
    hasNextPage,
    onNextPage,
    numPages,
}) {
    return (
        <div className="pagination d-flex justify-content-between align-items-center mt-4 mb-4">
            <Button
                disabled={isPreviousData || !hasPreviousPage}
                onClick={() => onNextPage(page - 1)}
                variant="primary"
            >
                Previous Page
            </Button>

            <span>
                Page: {page}/{numPages}
            </span>

            <Button
                disabled={isPreviousData || !hasNextPage}
                onClick={() => onNextPage(page + 1)}
                variant="primary"
            >
                Next Page
            </Button>
        </div>
    );
}
