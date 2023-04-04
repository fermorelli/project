import { useEffect, useState } from "react";
import axios from "axios";

export const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: `${city}`, days: '7'},
        headers: {
          'X-RapidAPI-Key': '434eb77b37msh2bd772753bd99c7p18b85bjsnefe11ac8e3a4',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

    useEffect(()=>{
        if(buttonClicked){
            axios.request(options).then(function (response) {
                console.log(response.data);
                setWeatherData(response.data);
            }).catch(function (error) {
                console.error(error);
            });
            setButtonClicked(false);
        }
    }, [buttonClicked])

    const handleSubmit = (event) => {
        event.preventDefault();
        setButtonClicked(true);
      };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Search your location</label>
            <input type="text" value={city} onChange={(e)=> setCity(e.target.value)} />
            <button type="submit">Go</button>
        </form>
        <div>
            {weatherData ?
                <>
                <span>{`${city} weather:`}</span>
                <span>{weatherData.location.name}</span>
                </>
            : <span>Make your search</span>}
        </div>
        </>
    )
};