import React from "react";
import ButtonComponent from "./ButtonComponent";
import { useState } from "react";
import Display from "./Display";

const InputComponent = (props) => {
    const [zipCode, setZipCode] = useState('');
    const [weatherData, setWeatherData] = useState({});

    const fetchWeather = async () => {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=66f6758d2dce44048d8180824232206&q=${zipCode}&aqi=no`)
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
        } catch (error) {
            console.log(error);
        }
          
    }
    // useEffect(() => {
    //     fetchWeather();
    // },[zipCode]);
    // console.log();
    const handleChange = (e) => {
        setZipCode(e.target.value);
    }

    return (
        <>
            <input value={zipCode} onChange={handleChange}></input>
            <ButtonComponent onClick={() => fetchWeather(zipCode)}/>
            <Display weatherData={weatherData}/>
        </>
    )
}

export default InputComponent;