import { useEffect } from "react";
import axios from "axios";

export const Weather = () => {

    const input = 'Berlin';

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: `${input}`, days: '7'},
        headers: {
          'X-RapidAPI-Key': '434eb77b37msh2bd772753bd99c7p18b85bjsnefe11ac8e3a4',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

    useEffect(()=>{
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div>Your city weather</div>
    )
};