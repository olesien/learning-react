import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import SwapiAPI from "../services/SwapiAPI";

import ListItems from "../components/ListItems";

export default function Films() {
    const [films, setFilms] = useState();

    // Get todos from api
    const getFilms = async () => {
        const data = await SwapiAPI.getFilms();
        console.log(data);
        setFilms(data);
    };

    // Get todos from api when component is first mounted
    useEffect(() => {
        getFilms();
    }, []);
    return (
        <>
            <h2>Films</h2>
            <ListItems data={films} type="Films" />
            <PaginationBar data={films} />
        </>
    );
}
