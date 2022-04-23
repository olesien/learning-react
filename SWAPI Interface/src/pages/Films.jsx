import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import SwapiAPI from "../services/SwapiAPI";

import ListItems from "../components/ListItems";

import { Navigate, useSearchParams } from "react-router-dom";
import Search from "../components/Search";

export default function Films() {
    const [searchParams, setSearchParams] = useSearchParams();

    let page = searchParams.get("page");
    const [films, setFilms] = useState();
    const [loading, setLoading] = useState(false);

    // Get todos from api
    const getFilms = async () => {
        setLoading(true);
        const data = await SwapiAPI.getFilms(page);
        console.log(data);
        setFilms(data);
        setLoading(false);
    };

    const changePage = async (newUrl, newPage) => {
        setLoading(true);
        setSearchParams({ page: newPage });
        const data = await SwapiAPI.changePage(newUrl);
        setFilms(data);
        setLoading(false);
    };

    const makeSearch = async (newSearch) => {
        alert(newSearch);
    };

    // Get todos from api when component is first mounted
    useEffect(() => {
        if (!page) {
            setSearchParams({ page: 1 });
        }
        getFilms();
    }, []);
    return (
        <>
            <h2>Films</h2>
            <Search makeSearch={makeSearch} />
            <ListItems data={films} type="Films" />
            <PaginationBar
                data={films}
                page={page}
                changePage={changePage}
                loading={loading}
            />
        </>
    );
}
