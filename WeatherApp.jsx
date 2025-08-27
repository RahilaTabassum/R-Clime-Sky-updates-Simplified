import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [ weatherInfo, setWeatherInfo ] = useState({
        city: "Delhi",
        feelsLike: 39.45,
        humidity: 45,
        temp: 35.29,
        tempMax: 35.29,
        tempMin: 35.29,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>WeatherApp</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}