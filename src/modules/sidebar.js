import { getLocationData } from "./app";

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
    handleSearchData(); //SEARCH ACTION

};


const handleSearchData = () => { //HANDLE SEARCH DATA
    const searchBtn = document.querySelector('.feather-search');

    searchBtn.addEventListener('click', async () => { //ON CLICK OF SEARCH ICON

        let searchValue = document.querySelector('.search').value; //GET VALUE SEARCHED
        getLocationData(searchValue); //UPDATE DOM WITH LOCATION SEARCHED
    })
}

export {sidebarModule}