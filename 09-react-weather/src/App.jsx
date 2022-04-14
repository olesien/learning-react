import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import SearchCity from "./components/SearchCity";
import { getCurrentWeather } from "./services/owmapi";
import "./App.css";

const App = () => {
    const [data, setData] = useState({
        name: "CITY",
        sys: { country: "COUNTRY" },
        main: { temp: "TEMP", humidity: "HUMIDITY" },
        wind: { speed: "WIND_SPEED" },
    });
    const changeCity = async (newCity) => {
        if (newCity.length < 1) {
            return;
        }

        console.log(newCity);
        const resourceData = await getCurrentWeather(newCity);

        // update data state with resource data
        setData(resourceData);
        //console.log(resourceData);
    };
    return (
        <div id="app" className="container">
            <SearchCity changeCity={changeCity} />

            <Forecast data={data} />
        </div>
    );
};

export default App;
