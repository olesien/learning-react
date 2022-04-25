import { useEffect, useState } from "react";
import PaginationBar from "../components/PaginationBar";
import SwapiAPI from "../services/SwapiAPI";

import ListItems from "../components/ListItems";

import { useSearchParams } from "react-router-dom";
import Search from "../components/Search";

export default function Films() {
    const [searchParams, setSearchParams] = useSearchParams();

    let page = searchParams.get("page");
    let search = searchParams.get("search");
    const [films, setFilms] = useState();
    const [loading, setLoading] = useState(false);

    // Get films
    const getFilms = async (newSearch = null, emptySearch = false) => {
        setLoading(true);
        console.log("making req");
        let data;
        if ((emptySearch || !search) && !newSearch) {
            data = await SwapiAPI.getFilms(page);
        } else {
            //It's a search!
            data = await SwapiAPI.searchFilms(newSearch ? newSearch : search);
        }
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
        if (newSearch.length > 1) {
            setSearchParams({ search: newSearch });
            getFilms(newSearch);
        } else {
            setSearchParams({ page: 1 });
            getFilms(null, true);
        }
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
