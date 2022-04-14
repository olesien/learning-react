import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SearchCity = ({ changeCity }) => {
    const [city, setCity] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (city.length < 3) {
            alert("Too short");
        }
        changeCity(city);
        setCity("");
    };
    return (
        <div id="search-wrapper">
            <form id="search-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter city to search for"
                        aria-label="City"
                        aria-details="Search for city to show current weather for."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="submit" className="btn btn-success">
                        🔍
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchCity;
