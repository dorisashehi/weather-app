import { getLocationData, history, pushToHistory } from "./app";
import { showSpinner } from './spinner';

const sidebarModule = (data) => {

    const wrapper = document.querySelector(".right-sidebar-content");

    let { country, region, lat, lon } = data.location;
    let {humidity, wind_degree, feelslike_c } = data.current;

    const content =
        `
            <div class="container search-place">
                <div class="form-group">
                    <input type="text" placeholder="Another location" class="search"/>
                    <span class="message"></span>
                </div>
                <div class="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>

            </div>

            <div class="container">
                <ul class="recent-searched">
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
    loadHistory();
    handleSearchData(); //SEARCH ACTION


};

const loadHistory = () => { //POPULATE THE HISTORY LIST WITH ITEMS SEARCHED BEFORE

    const searchedHistory = document.querySelector('.recent-searched');
    history.forEach(item => { //FOR EACH ITEM SEARCHED BEFORE

        const listItem = document.createElement('li');
        listItem.classList.add("row");
        listItem.textContent = item; //GET ITEM TEXT TO SEARCH
        listItem.addEventListener('click', (e) => handleHistoryClicked(e)); //AD ASTION WHEN WE CLICK ON IT
        searchedHistory.appendChild(listItem);

    })
}

const handleHistoryClicked = (e) => { //HISTORY ITEMS CLICKED ACTION
    getLocationData(e.target.textContent); //GET WEATHER DETAILS FOR THEM

}

const handleSearchData = () => { //HANDLE SEARCH DATA

    const searchBtn = document.querySelector('.feather-search');
    let search = document.querySelector('.search'); //GET SEARCH DOM ELEMENT
    let searchValue =  search.value; //GET VALE TEXT SEARCHED

    search.addEventListener('input', async () => { //ON CLICK OF SEARCH ICON
        searchValue = search.value;
        validateValue(searchValue);
    })

    searchBtn.addEventListener('click', async () => { //ON CLICK OF SEARCH ICON

        if(validateValue(searchValue)){

            showSpinner(false); //SHOW LOADER

            setTimeout(()=>{ //SHOW RESULT AFTER SOME TIMES
                getLocationData(searchValue); //UPDATE DOM WITH LOCATION SEARCHED
                pushToHistory(searchValue); //PUSH TO HISTORY VALUE SEARCHED
            },1000)

        }
    })

}

const validateValue = (searchedValue) => {
    const error = document.querySelector('span.message');

    if(searchedValue === '') { //IF SEARCH IS EMTRY
        error.classList.add('error'); //SHOW ERROR
        error.textContent = "Please input a city / location.";
        return false;
    }

    error.textContent = '';
    error.classList.remove('error'); //ELSE REMOVE ERROR


    return true; //VALIDATION WITHOUT ERRORS

}

export {sidebarModule}