import { format } from 'date-fns';
import { sidebarModule } from './sidebar';
import {contentModule } from "./content";
import { backgrounds } from '../../weather_conditions';
import { showSpinner } from './spinner';

let history = ['london', 'madrid', 'berlin','wien']; //BY DEAFAULT WILL HAVE THESE ITEM SEARCHED AT HISTORY

const pushToHistory = (searchValue) => { //CHECK IF SEARCHED VALUE EXIST IN HISTORY

    (history.indexOf(searchValue.toLowerCase()) !== 0) ? history.unshift(searchValue) : ''; //PUT AT THE BEGINNING OF THE HISTORY
    if(history.length > 4) history.pop(); //REMOVE THE LAST ELEMENT OF THE HISTORY

}

const fetchWeather = async(location) => { //FETCH DATA FROM WEATHER API

    let results = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}`,
        {mode: 'cors'}
    )
    //showSpinner(true);

    if(results.ok){
        ///showSpinner(false);
        let locationWeather = await results.json();
        return locationWeather;

    }else{
        throw new Error("Couldn't fetch data");
    }

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

const getBckImg = (data) => { //GET BACKGROUND IMAGE BASED ON THE WEATHER CODE TAKEN FROM SEARCHED PLACE

    const currentWeather = data.current;
    const is_day = (currentWeather.is_day == 1) ? true : false; //CHECK ID ITS DAY OR NIGHT
    const weatherCode = currentWeather.condition.code; //SEARCHED LOCATION WEATHER CODE
    const weatherCodeData = backgrounds.find(item => item.code.includes(weatherCode)); //GET IMAGE FROM BACKGROUND DATA BASED ON THE CODE

    let imageSrc = '';

    (is_day) ? imageSrc = weatherCodeData.day.image : imageSrc = weatherCodeData.night.image; //BACKGROUND IMG BASED ON DAY OR NIGHT

    let content = document.querySelector('.wrapper');
    content.style.backgroundImage = `url(${imageSrc})`; //SET URL OF IMAGE AS BACKGROUND TO WARPPER DIV


}
const getLocationData =  async(location = '') => {
    //showSpinner(true);
    if(location == ''){ //GET OUR LOCATION(BROWSER LOCATION) WHEN EMPTY LOCATION

        let position  = await getCurentLocation();
        location = await showLocation(position);

    }

    try{
        let data = await fetchWeather(location); //WAIT TO FETCH DATA FROM API

        showSpinner(true);

        getBckImg(data);//SHOW BACKGROUND IMAGE
        sidebarModule(data); //SHOW CONTENT
        contentModule(data); //SHOW CONTENT


    }catch(error){  //IF ANY ERROR IS THROWN DURING THE FETCH
        console.log(error)

        const errorMsg = document.querySelector('span.message');
        if(errorMsg){
            errorMsg.classList.add('error'); //SHOW ERROR
            errorMsg.textContent = error;

        }
        showSpinner(true); //REMOVE LOADER

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

const toggleSidebar = () => {
    document.querySelector(".feather-menu").addEventListener('click', () => {

        // Get the element by its class name
        var element = document.querySelector('.right-sidebar-content');

        // Check if the element exists
        if (element) {

            console.log(element.classList.contains('show'));
            // Get the class list of the element
            var classList = element.classList.toggle("show");


        }

    })
}

export {formatDate, getTime, getDay, getLocationData, history, pushToHistory, toggleSidebar}