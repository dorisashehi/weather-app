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

            <div class="container weather-preference">
                <h1>App Preferences</h1>

                <ul class="weather-details">
                    <li class="row">
                        <div class="col">Temperature</div>
                        <div class="col">
                            <div class="weather-switcher">
                                <button class="switcher">
                                    <div class="switch">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#8e8170" width="20px" height="20px" viewBox="-1.92 -1.92 35.84 35.84" version="1.1" stroke="#90826F" stroke-width="0.00032">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier"> <title>temperature-high</title> <path d="M20.75 6.008c0-6.246-9.501-6.248-9.5 0v13.238c-1.235 1.224-2 2.921-2 4.796 0 3.728 3.022 6.75 6.75 6.75s6.75-3.022 6.75-6.75c0-1.875-0.765-3.572-2-4.796l-0.001-0zM16 29.25c-2.9-0-5.25-2.351-5.25-5.251 0-1.553 0.674-2.948 1.745-3.909l0.005-0.004 0.006-0.012c0.13-0.122 0.215-0.29 0.231-0.477l0-0.003c0.001-0.014 0.007-0.024 0.008-0.038l0.006-0.029v-13.52c-0.003-0.053-0.005-0.115-0.005-0.178 0-1.704 1.381-3.085 3.085-3.085 0.060 0 0.12 0.002 0.179 0.005l-0.008-0c0.051-0.003 0.11-0.005 0.17-0.005 1.704 0 3.085 1.381 3.085 3.085 0 0.063-0.002 0.125-0.006 0.186l0-0.008v13.52l0.006 0.029 0.007 0.036c0.015 0.191 0.101 0.36 0.231 0.482l0 0 0.006 0.012c1.076 0.966 1.75 2.361 1.75 3.913 0 2.9-2.35 5.25-5.25 5.251h-0zM16.75 21.367v-15.367c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 15.367c-1.164 0.338-2 1.394-2 2.646 0 1.519 1.231 2.75 2.75 2.75s2.75-1.231 2.75-2.75c0-1.252-0.836-2.308-1.981-2.641l-0.019-0.005zM26.5 2.25c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM26.5 7.25c-0.966 0-1.75-0.784-1.75-1.75s0.784-1.75 1.75-1.75c0.966 0 1.75 0.784 1.75 1.75v0c-0.001 0.966-0.784 1.749-1.75 1.75h-0z"></path> </g>
                                        </svg>
                                    </div>
                                    <p class="celcius">C</p>
                                    <p class="fahrenheit">F</p>
                                </button>
                            </div>
                        <div>
                    </li>
                </ul>

            </div>

        `;

    wrapper.innerHTML = content;
    loadHistory();
    switchTemp();
    handleSearchData(); //SEARCH ACTION


};

const switchTemp = () => {
    const switcher = document.querySelector(".switcher");
    switcher.addEventListener("click", (e) => {



        const temp = e.target.textContent.toLowerCase(); //GET THE NAME OF TEMP CLICKED
        const tempC = document.querySelector('.temperature-celcius'); //GET FROM CONTENT CELCIUS CONTAINER
        const tempF = document.querySelector('.temperature-fahreneit'); //GET FROM CONTENT FAHRENHEIT CONTAINER
        const switchBtn = document.querySelector('.switch'); //GET FROM CONTENT SWITCHER CONTAINER

        if(temp == 'f'){ //IF CLICKED FAHRENHEIT

            showSpinner(false); //SHOW LOADER

            setTimeout(()=>{ //SHOW RESULT AFTER SOME TIMES

                switchBtn.style.left = 'unset'
                switchBtn.style.right = '4px'; //MOVE RIGHT
                tempC.style.display = 'none';
                tempF.style.display = 'flex'; //DISPLAY F TEMP AND REMOVE C TEMP
                showSpinner(true); //REMOVE LOADER

            },300)
        }

        if(temp == 'c'){

            showSpinner(false); //SHOW LOADER

            setTimeout(()=>{ //SHOW RESULT AFTER SOME TIMES

                switchBtn.style.left = '4px'; //MOVE left
                switchBtn.style.right = 'unset';
                tempC.style.display = 'flex'; //DISPLAY C TEMP AND REMOVE F TEMP
                tempF.style.display = 'none';
                showSpinner(true); //REMOVE LOADER

            },300)
        }



    })
}

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