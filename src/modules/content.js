import { fetchWeather, formatDate, getTime, getDay } from "./app";

const contentModule = async () => {

    const wrapper = document.querySelector(".main");

    let { localtime, name, temp_c, condition } = await fetchWeather(); //FETCH DATA FROM API

    const content =
        `
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

        `;

    wrapper.innerHTML = content;

};

export {contentModule}