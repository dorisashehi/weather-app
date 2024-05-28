import { format } from 'date-fns';
let locationWeather = '';

const fetchWeather = async() => { //FETCH DATA FROM WEATHER API

    let results = await fetch('https://api.weatherapi.com/v1/current.json?key=0b97f25ae5fb432c977180517242505&q=london',
        {mode: 'cors'}
    )
    locationWeather = await results.json();

    let { country, region, lat, lon, localtime, name } = locationWeather.location;
    let { temp_c, humidity, wind_degree, feelslike_c, condition } = locationWeather.current;

    return { country, region, lat, lon, localtime, name, temp_c, humidity, wind_degree, feelslike_c, condition };

}

const formatDate = (date) => { //GET FORMATED DATE AS 17 MAY 2024
    return format(date, 'd MMMM yyyy');
}

const getTime = (date) => { //GET ONLY CURRENT HOUR AS HOUR:MINUTE
    return format(date, 'HH:mm');
}

const getDay = (date) => { //GET DAY NAME
    return format(date, "eeee")
}


export {fetchWeather, formatDate, getTime, getDay}