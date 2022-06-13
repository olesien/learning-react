import { useEffect, useState } from "react";
import PaginationBar from "../components/PaginationBar";
import SwapiAPI from "../services/SwapiAPI";

import ListItems from "../components/ListItems";

import { useSearchParams } from "react-router-dom";
import Search from "../components/Search";

import { useQuery } from "react-query";

export default function Films() {
    //Declare states
    const [searchParams, setSearchParams] = useSearchParams();
    //const [films, setFilms] = useState();
    //const [loading, setLoading] = useState(false);

    //Get query params
    let page = searchParams.get("page");
    let search = searchParams.get("search");

    const {
        data: films,
        error,
        isError,
        isLoading,
    } = useQuery(["films", { page, search }], SwapiAPI.getFilms, {
        keepPreviousData: false,
    });

    //Get the new URL and the new PAGE, this will then update the query params along with making a request to SWAPI
    const changePage = async (newUrl, newPage) => {
        //setLoading(true);
        setSearchParams({ page: newPage });
        //const data = await SwapiAPI.changePage(newUrl);
        //setFilms(data);
        //setLoading(false);
    };

    //Make a new search!
    const makeSearch = async (newSearch) => {
        if (newSearch.length > 1) {
            setSearchParams({ search: newSearch });
        } else {
            setSearchParams({ page: 1 });
        }
    };

    return (
        <>
            <h2>Films</h2>
            <Search makeSearch={makeSearch} />
            <ListItems data={films} type="Films" loading={isLoading} />
            <PaginationBar
                data={films}
                page={page}
                changePage={changePage}
                loading={isLoading}
            />
        </>
    );
}
