import { fetchWeather } from "./app";
import { format } from 'date-fns';


const sidebarModule = async () => {

    const wrapper = document.querySelector(".wrapper");

    let weatherData = await fetchWeather(); //FETCH DATA FROM API

    let { country, region, lat, lon, localtime, name } = weatherData.location;
    let { temp_c, humidity, wind_degree, feelslike_c, condition } = weatherData.current;

    const content =
        `
            <div class="main">

                <div class="menu-content">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg> -->

                </div>


                <div class="text-content">
                    <h1 class="col temperature">
                        ${temp_c}°
                    </h1>
                    <div class="col">
                        <h3 class="location">${name}</h3>
                        <div class="time">${getTime(localtime)} - ${getDay(localtime)}, ${formatDate(localtime)}</div>
                    </div>
                    <div class="col">
                        <img src="${condition.icon}" class="weather-icon" />
                        <div class="weather-description">${condition.text}</div>
                    </div>
                </div>

            </div>

            <div class="right-sidebar-content">
                <div class="container search-place">
                    <div class="form-group">
                        <input type="text" placeholder="Another location" class="search"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <div class="search-icon">
                        <img src="" />
                    </div>

                </div>

                <div class="container">
                    <ul class="recent-searched">
                        <li class="row">${country}</li>
                        <li class="row">New York</li>
                        <li class="row">Brooklyn</li>
                        <li class="row">Florida</li>
                    </ul>
                </div>

                <div class="container">
                    <h1>Weather Details</h1>
                    <ul class="weather-details">
                        <li class="row">
                            <div class="col">Sunny</div>
                            <div class="col">9%</div>
                        </li>
                        <li class="row">
                            <div class="col">Humidity</div>
                            <div class="col">${humidity}%</div>
                        </li>
                        <li class="row">
                            <div class="col">Wind</div>
                            <div class="col">${wind_degree} km/h</div>
                        </li>
                        <li class="row">
                            <div class="col">Feels like</div>
                            <div class="col">${feelslike_c}</div>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <h1>Location</h1>
                    <ul class="weather-details">
                        <li class="row">
                            <div class="col">Country</div>
                            <div class="col">${country}<div>
                        </li>
                        <li class="row">
                            <div class="col">Region</div>
                            <div class="col">${region}</div>
                        </li>
                        <li class="row">
                            <div class="col">Latitude</div>
                            <div class="col">${lat}</div>
                        </li>
                        <li class="row">
                            <div class="col">Longitude</div>
                            <div class="col">${lon}</div>
                        </li>
                    </ul>
                </div>
            </div>

        `;

    wrapper.innerHTML = content;




};

const formatDate = (date) => { //GET FORMATED DATE AS 17 MAY 2024
    return format(date, 'd MMMM yyyy');
}

const getTime = (date) => { //GET ONLY CURRENT HOUR AS HOUR:MINUTE
    return format(date, 'HH:mm');
}

const getDay = (date) => {
    return format(date, "eeee")
}

export {sidebarModule}