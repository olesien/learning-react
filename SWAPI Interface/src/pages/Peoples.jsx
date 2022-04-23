import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import SwapiAPI from "../services/SwapiAPI";

import ListItems from "../components/ListItems";

import Search from "../components/Search";

import { Navigate, useSearchParams } from "react-router-dom";

export default function Peoples() {
    const [peoples, setPeoples] = useState();
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    let page = searchParams.get("page");
    let search = searchParams.get("search");

    // Get todos from api
    const getPeoples = async () => {
        setLoading(true);
        console.log("making req");
        const data = await SwapiAPI.getPeoples(page);
        console.log(data);
        setPeoples(data);
        setLoading(false);
    };

    // Get todos from api when component is first mounted

    const changePage = async (newUrl, newPage) => {
        setLoading(true);
        setSearchParams({ page: newPage });
        const data = await SwapiAPI.changePage(newUrl);
        setPeoples(data);
        setLoading(false);
    };

    const makeSearch = async (newSearch) => {
        alert(newSearch);
    };

    useEffect(() => {
        if (!page && !search) {
            setSearchParams({ page: 1 });
        }
        getPeoples();
    }, []);

    // count: 82
    // next: "https://swapi.dev/api/people/?page=2"
    // previous: null
    // results: Array(10)
    // Array index 0 ---------------------> {
    // birth_year: "19BBY"
    // created: "2014-12-09T13:50:51.644000Z"
    // edited: "2014-12-20T21:17:56.891000Z"
    // eye_color: "blue"
    // films: (4) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
    // gender: "male"
    // hair_color: "blond"
    // height: "172"
    // homeworld: "https://swapi.dev/api/planets/1/"
    // mass: "77"
    // name: "Luke Skywalker"
    // skin_color: "fair"
    // species: []
    // starships: (2) ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/']
    // url: "https://swapi.dev/api/people/1/"
    // vehicles: (2) ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/']}

    return (
        <>
            <h2>Peoples</h2>
            {/* <Card style={{ width: "18rem" }}>
                <Card.Title>Card Title</Card.Title>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card> */}
            <Search makeSearch={makeSearch} />
            <ListItems data={peoples} type="Peoples" />
            <PaginationBar
                data={peoples}
                page={page}
                changePage={changePage}
                loading={loading}
            />
        </>
    );
}
