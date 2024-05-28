import { fetchWeather } from "./app";
import { contentModule } from "./content";


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

const getLocation =  async() => { console.log("hello");
    let position  = await getCurentLocation();
    let location = await showLocation(position);

    let data = await fetchWeather(location); //WAIT TO FETCH DATA FROM API
    if(data){ //IF DATA RETURNED FROM API
        sidebarModule(data); //SHOW CONTENT
        contentModule(data); //SHOW CONTENT
    }
}

const sidebarModule = (data) => {

    const wrapper = document.querySelector(".right-sidebar-content");

    let { country, region, lat, lon } = data.location;
    let {humidity, wind_degree, feelslike_c } = data.current;

    const content =
        `
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
        `;

    wrapper.innerHTML = content;
    console.log("KEYY");
    //handleSearchData(); //SEARCH ACTION

};


const handleSearchData = () => { //HANDLE SEARCH DATA
    const searchBtn = document.querySelector('.feather-search');

    searchBtn.addEventListener('click', async () => { //ON CLICK OF SEARCH ICON

        let searchValue = document.querySelector('.search').value; //GET VALUE SEARCHED
        let { country, region, lat, lon, humidity, wind_degree, feelslike_c } = await fetchWeather(searchValue);
    })
}

export {getLocation}