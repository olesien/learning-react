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
        } else {
            setSearchParams({ page: 1 });
        }
    };

    // Get the films on reload or new page/search
    useEffect(() => {
        // Get films
        const getFilms = async () => {
            setLoading(true);
            console.log("making req");
            let data;
            if (!search) {
                data = await SwapiAPI.getFilms(page);
            } else {
                //It's a search!
                data = await SwapiAPI.searchFilms(search);
            }

            console.log(data);
            setFilms(data);
            setLoading(false);
        };
        if (!page && !search) {
            setSearchParams({ page: 1 });
        }
        getFilms();
    }, [page, setSearchParams, search]);
    return (
        <>
            <h2>Films</h2>
            <Search makeSearch={makeSearch} />
            <ListItems data={films} type="Films" loading={loading} />
            <PaginationBar
                data={films}
                page={page}
                changePage={changePage}
                loading={loading}
            />
        </>
    );
}
