import { format } from 'date-fns';
import { sidebarModule } from './sidebar';
import {contentModule } from "./content";
import { backgrounds } from '../../weather_conditions';

let history = ['london', 'madrid', 'berlin','wien']; //BY DEAFAULT WILL HAVE THESE ITEM SEARCHED

const pushToHistory = (searchValue) => { //CHECK IF SEARCHED VALUE EXIST IN HISTORY

    (history.indexOf(searchValue.toLowerCase()) !== 0) ? history.unshift(searchValue) : ''; //PUT AT THE BEGINNING OF THE HISTORY
    if(history.length > 4) history.pop(); //REMOVE THE LAST ELEMENT OF THE HISTORY

}

const fetchWeather = async(location) => { //FETCH DATA FROM WEATHER API

    let results = await fetch('https://api.weatherapi.com/v1/current.json?key=0b97f25ae5fb432c977180517242505&q='+location,
        {mode: 'cors'}
    )

    let locationWeather = await results.json();

    return locationWeather;

}

const getCurentLocation = () => { //RETURN A PROMISE FOR TAKING THE CURRENT LOCATION
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

}

async function showLocation(position) { //FNC TO GET COORDS OF THE LOCATION

    let latitude = await position.coords.latitude;
    let longitude = await position.coords.longitude;

    let locationString = latitude+","+longitude;
    return locationString;
}

const getBckImg = (data) => {

    console.log(data);
    const currentWeather = data.current;
    const is_day = (currentWeather.is_day == 1) ? true : false;
    const weatherCode = currentWeather.condition.code;
    const weatherCodeData = backgrounds.find(item => item.code.includes(weatherCode));

    let imageSrc = '';

    (is_day) ? imageSrc = weatherCodeData.day.image : imageSrc = weatherCodeData.night.image;


    let content = document.querySelector('.wrapper');
    content.style.backgroundImage = `url(${imageSrc})`;
    console.log(imageSrc);

}
const getLocationData =  async(location = '') => {
    if(location == ''){ //GET OUR LOCATION(BROWSER LOCATION) WHEN EMPTY LOCATION

        let position  = await getCurentLocation();
        location = await showLocation(position);

    }

    let data = await fetchWeather(location); //WAIT TO FETCH DATA FROM API
    console.log(data);

    if(data){ //IF DATA RETURNED FROM API

        getBckImg(data);//SHOW BACKGROUND IMAGE
        sidebarModule(data); //SHOW CONTENT
        contentModule(data); //SHOW CONTENT

    }
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


export {formatDate, getTime, getDay, getLocationData, history, pushToHistory}